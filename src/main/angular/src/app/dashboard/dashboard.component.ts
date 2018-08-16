import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ServerAPI } from '../../service/server-api/server-api.service';
import { forEach } from '@angular/router/src/utils/collection';
import { MarketDatatableComponent } from '../market-datatable/market-datatable.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Customized user dashboard based on currency markets a user has favourited
 */
export class DashboardComponent implements OnInit {

  @ViewChild('marketTable') marketTable: MarketDatatableComponent;

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI             - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
    this.filter = this.filter.bind(this);
    this.removeFromDashboardList = this.removeFromDashboardList.bind(this);
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Perform filtering based on user's favourite
   * @param  {any} market    - A market object which has an id from the database,
   *                         -  with the format of {market: {id: number, ...}...}
   * @return {Boolean}       - if true, a market record will be shown on the datatable, otherwise,
   *                         - it will not be shown
   */
  filter(market) {
    if (!market) { return false; }
    return this.marketTable.userFavouritesList.reduce((accumulator, currentValue) => {
      return accumulator || market.market.id === currentValue.market.id;
    },                                                false);
  }

  /**
   * Remove a user favourite from the page and also from the database
   * @param  {number} id - id of the favourite
   */
  removeFromDashboardList(id) {
    this.serverAPI.deleteUserFavourite(id).then((response) => {
      if (response.status === 202) {
          // Remove the favourite that had been deleted
        this.marketTable.userFavouritesList = this.marketTable.userFavouritesList.filter((v) => {
          return v.id !== Number(id);
        });
        this.marketTable.refresh();
      }
    }). catch (() => {});
  }
}
