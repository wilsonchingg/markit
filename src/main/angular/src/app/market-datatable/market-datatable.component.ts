import { Component, OnInit, ViewEncapsulation, OnChanges, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { dtOptions } from '../../util/config';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ServerAPI } from '../../service/server-api/server-api.service';
import { DataStreamService } from '../../service/server-api/data-stream.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-market-datatable',
  templateUrl: './market-datatable.component.html',
  styleUrls: ['./market-datatable.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Datatables for the list of currencies
 */
export class MarketDatatableComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  @Input() searchText: string = null;
  // If additional datatable filtering is needed
  @Input() customFilter: Function = () => {return true; };

  // Currency converter's picklist input on the left
  cur1: string;
  // Currency converter's picklist input on the right
  cur2: string;
  // Currency input by the user
  inputCurrency: number;

  // List of currencies to be fetched to the datatable
  currentMarket = [];
  // List of shortlisted currencies along with their details
  // (we don't want to show all 200+ currencies on the page)
  marketList = [];

  // Datatable settings
  dtOptions: DataTables.Settings = {};

  // Used to trigger the datatable's initialization
  dtTrigger: Subject<any> = new Subject();


  isDatatableInitialized = false;
  // List containing all the favourites for the current user
  userFavouritesList = [];
  dataStreamSubscription: any;

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI          - Server requests interface
   * @param  {dataStream} DataStreamService - A service containing a ReplayObject
   *                                          of Tahoo current data
   */
  constructor(private serverAPI: ServerAPI, private dataStream: DataStreamService) {
    this.processDataTable = this.processDataTable.bind(this);
    this.filterDataTable = this.filterDataTable.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.addFavourite = this.addFavourite.bind(this);
    this.persistUserFavourite = this.persistUserFavourite.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  /**
   * Perform fetching and initialize datatable
   */
  ngOnInit() {
    this.dtOptions = dtOptions({});
    Promise.all([this.serverAPI.fetchMarketsData(), this.serverAPI.getUserFavourites()])
    .then((data) => {
      this.marketList = data[0];
      this.userFavouritesList = data[1];
      this.dataStreamSubscription = this.dataStream.currentList.subscribe((value) => {
        this.processDataTable(value);
      });
    });
  }

  /**
   * Re-apply datatable filtering and refresh user favourites where applicable
   */
  refresh() {
    this.currentMarket = this.persistUserFavourite(this.filterDataTable(this.currentMarket));
  }

  /**
   * If a custom search bar is used, this method will redraw the DataTables
   * when input of the search bar is changed
   */
  ngOnChanges(...args: any[]) {
    // Do a manual search if these is a text changes on the custom search bar
    if (this.searchText != null && this.currentMarket.length) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.search(this.searchText).draw();
      });
    }
  }

  /**
   * Unsubscribe from the data feed
   */
  ngOnDestroy() {
    if (this.dataStreamSubscription) {
      this.dataStreamSubscription.unsubscribe();
    }
  }

  /**
   * Favourite a currency market
   * @param  {[type]} id - market id
   */
  addFavourite(id) {
    this.serverAPI.newUserFavourite(id).then((response) => {
      if (response.status === 202) {
        // Need the obtain a new list favourite
        this.serverAPI.getUserFavourites().then((data) => {
          this.userFavouritesList = data;
          this.refresh();
        });
      }
    }).catch(() => {});
  }

  /**
   * Remove a user favourite
   * @param  {[type]} id - favourite id
   */
  removeFavourite(id) {
    this.serverAPI.deleteUserFavourite(id).then((response) => {
      if (response.status === 202) {
        // Remove the favourite that had been deleted
        this.userFavouritesList = this.userFavouritesList.filter((v) => {
          return v.id !== Number(id);
        });
        this.refresh();
      }
    }). catch (() => {});
  }

  /**
   * Get the exchange rate of a currency given the symbol of the currency
   * @param  {string} id - id of the currency
   * @return {number}    - The price of the currency, or
   *                       1 if currency is USD
   */
  getPrice(symbol) {
    if (symbol === 'USD') { return 1; }
    for (let i = 0; i < this.currentMarket.length; i += 1) {
      if (this.currentMarket[i].symbol === symbol) {
        return this.currentMarket[i].price_num;
      }
    }
    return; // unreachable
  }

  /**
   * Given current currency data obtained from Yahoo API, convert it to more readable format
   * and filter the data based on market data obtained from the database
   * @param  {any[]} currentData   - data from the Yahoo API
   * @return {any[]}                - an array of filtered and converted currency array
   */
  processDataTable(currentData) {
    if (!currentData.count) { return; }
    const _currentMarket = [];

    for (let i = 0; i < currentData.count; i += 1) {
      const _date = new Date(currentData.resources[i].utctime);
      const _obj = {
        id: -1,
        name: '',
        symbol: currentData.resources[i].symbol.replace('=X', ''),
        price_num: currentData.resources[i].price,
        time: moment(currentData.resources[i].utctime).format('YYYY/MM/DD HH:mm:ss'),
        url: '',
        date: _date,
        fromNow: moment(currentData.resources[i].utctime).fromNow(),
        change: currentData.resources[i].changePercent,
        customClass: '',
        imageSource: '/markit/assets/img/star.png',
        favouriteId: '',
      };
      if (currentData.resources[i].changePercent > 0) { _obj.customClass = 'text-success'; }
      if (currentData.resources[i].changePercent < 0) { _obj.customClass = 'text-danger'; }
      _currentMarket.push(_obj);
    }

    this.currentMarket = this.persistUserFavourite(this.filterDataTable(_currentMarket));
    if (!this.isDatatableInitialized) {
      this.dtTrigger.next();
      this.isDatatableInitialized = true;
    }
  }

  /**
   * Filter the list of currency markets (from Yahoo API) based
   * on information from the database, and add details to those filtered
   * markets
   * @param  {any[]} currentData - an array of currency
   * @return {any[]}              - - an array of filtered and converted currency array
   */
  filterDataTable(currentData) {
    const returnList = [];
    for (let i = 0; i < currentData.length; i += 1) {
      for (let j = 0; j < this.marketList.length; j += 1) {
        if (this.marketList[j].currency.code === currentData[i].symbol &&
                    this.customFilter(this.marketList[j]) &&
                    this.marketList[j].currency.code !== 'USD') {
          currentData[i].id = this.marketList[j].market.id;
          currentData[i].name = this.marketList[j].currency.name +
                        ' (' + currentData[i].symbol + ')';
          currentData[i].url = '/historicCurrent/' + this.marketList[j].market.symbol;
          returnList.push(currentData[i]);

          j = this.marketList.length;
        }
      }
    }
    return returnList.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  }

  /**
   * Set the user favouite status of a processed and filtered
   * current market list
   * @param  {any[]} currentData - a list of processed and filtered current market data
   * @return {any[]}             - a current market list that had the user favourite status set
   */
  persistUserFavourite(currentData) {
    for (let i = 0; i < currentData.length; i += 1) {
      let isFavourite = false;
      for (let k = 0; k < this.userFavouritesList.length; k += 1) {
        if (currentData[i].id === this.userFavouritesList[k].market.id) {
          currentData[i].favouriteId = this.userFavouritesList[k].id;
          isFavourite = true;
          currentData[i].imageSource = '/markit/assets/img/star_highlight.png';
          k = this.userFavouritesList.length;
        }
      }
      if (!isFavourite) {
        currentData[i].imageSource = '/markit/assets/img/star.png';
      }
    }
    return currentData;
  }
}
