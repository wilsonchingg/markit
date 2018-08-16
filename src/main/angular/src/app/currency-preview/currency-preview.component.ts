import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { DataStreamService } from '../../service/server-api/data-stream.service';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-currency-preview',
  templateUrl: './currency-preview.component.html',
  styleUrls: ['./currency-preview.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Card component containing historic daily market graph
 */
export class CurrencyPreviewComponent implements OnInit {
  @Input() removable = 'false';
  @Input() callback: Function;
  @Input() intrinioId = '';
  @Input() label = '';
  // Navigate url of the 'Info' button
  @Input() infoUrl = '/';
  // If currency preview has the delete option, the remove button will use the favourite id;
  @Input() favouriteID = -1;

  closingPrice: number;
  currentPrice: number;
  change = 0;
  // The currencyPreview component has a smaller space to draw the chart, so the radius of dataset
  // point should be set as 0 and y-axis gridding should be hidden
  lineChartOptions: any = {
    responsive: true,
    elements: { point: { radius: 0 } },
    scales: { xAxes: [{ display: false }] },
  };

  dataStreamSubscription: any;
  /**
   * Constructor
   *  @param  {dataStream} DataStreamService - A service containing a ReplayObject
   *                                          of Tahoo current data
   */
  constructor(private dataStream: DataStreamService) {
    this.onDataAvailable = this.onDataAvailable.bind(this);
    this.updateCurrentMarketInfo = this.updateCurrentMarketInfo.bind(this);

  }

  /**
   * Unsubscribe from the data stream listener
   */
  ngOnDestroy() {
    if (this.dataStreamSubscription) {
      this.dataStreamSubscription.unsubscribe();
    }
  }

  /**
   * Subscribe to current market data stream
   */
  ngOnInit() {
    this.dataStreamSubscription =  this.dataStream.currentList.subscribe((value) => {
      this.updateCurrentMarketInfo(value);
    });
  }

  /**
   * From the list of current market's data (Yahoo API),
   * find the price of the market of interest
   * @param  {any} currentData - an object containing current
   *  market information (Yahoo finance API)
   */
  updateCurrentMarketInfo(currentData) {
    for (let i = 0; i < currentData.count; i += 1) {
      if (this.label.includes(currentData.resources[i].symbol.replace('=X', ''))
    && currentData.resources[i].symbol !== 'USD=X') {
        this.currentPrice = currentData.resources[i].price || 0;
        if (this.currentPrice && this.closingPrice) {
          this.change = this.currentPrice - this.closingPrice;
        }
        i = currentData.count;
      }
    }
  }

  /**
   * Callback function when historic data has been fetched from the graph component
   * @param  {string[]} data - an array of string representing each data point in the graph
   */
  onDataAvailable(data) {
    this.closingPrice =  Number(data[data.length - 1]) || 0;
    if (this.currentPrice && this.closingPrice) {
      this.change = this.currentPrice - this.closingPrice;
    }
  }
}
