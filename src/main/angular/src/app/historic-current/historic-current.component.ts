import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStreamService } from '../../service/server-api/data-stream.service';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-historic-current',
  templateUrl: './historic-current.component.html',
  styleUrls: ['./historic-current.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Historic page of a specific market, such as USD:GBP
 */
export class HistoricCurrentComponent implements OnInit {

  dailyHistoric = '';
  monthlyHistoric = '';
  annualHistoric = '';

	// e.g. GBP
  currencyCode: string;
	// e.g. Great British Pound
  name: string;
  exchange: string;
	// Data obtained from Yahoo
  currentValue: number;
	// Subscription variable for Angular router
  sub: any;

  symbol: string;
  dataStreamSubscription: any;
	/**
   * Constructor
   * @param  {ActivatedRoute}  route           - Angular Router
   * @param  {serverAPI} ServerAPI             - Server requests interface
   * @param  {dataStream} DataStreamService    - A service containing a
   *                                             ReplayObject of Tahoo current data
   */
  constructor(private route: ActivatedRoute, private serverAPI: ServerAPI,
		            private dataStream: DataStreamService) {
    this.updateCurrentMarketInfo = this.updateCurrentMarketInfo.bind(this);
    this.updateMarketData = this.updateMarketData.bind(this);
  }

	/**
   * Subscribe to the router listener and get the market symbol
   * to enable fetching of historic data
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      if (params['marketId']) {
        this.symbol = params['marketId'];
        this.dailyHistoric = '$D' + params['marketId'];
        this.monthlyHistoric = '$' + params['marketId'];
        this.annualHistoric = '$A' + params['marketId'];
        this.serverAPI.fetchMarketsData().then((data) => {
          this.updateMarketData(data);
          this.dataStreamSubscription = this.dataStream.currentList.subscribe((value) => {
            this.updateCurrentMarketInfo(value);
          });
        });
      }
    });

  }

	/**
   * Unsubscribe from the router listener and data stream listener
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.dataStreamSubscription) {
      this.dataStreamSubscription.unsubscribe();
    }
  }

	/**
  * From the list of current market's data (Yahoo API),
  * find the associated information
  * @param  {any} currentData - an object containing current market information (Yahoo API)
  */
  updateCurrentMarketInfo(currentData) {
    for (let i = 0; i < currentData.count; i += 1) {
      if (currentData.resources[i].symbol.indexOf(this.currencyCode) >= 0) {
        this.currentValue = currentData.resources[i].price;
        i = currentData.count;
      }
    }
  }

	/**
  * From the list of market information (fetched from the database),
  * find the information associated to this component
  * @param  {any[]} marketData - list of market information
  */
  updateMarketData(marketData) {
    for (let i = 0; i < marketData.length; i += 1) {
      if (marketData[i].market.symbol === this.symbol && marketData[i].currency.code !== 'USD') {
        this.currencyCode = marketData[i].currency.code;
        this.name = marketData[i].currency.name;
        this.exchange = marketData[i].market.exchange.exchange;
      }
    }
  }
}
