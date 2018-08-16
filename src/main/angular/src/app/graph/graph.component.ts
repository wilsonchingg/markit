import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerAPI } from '../../service/server-api/server-api.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Generic graph component
 */
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() intrinioId = '';
  // Override line chart option if necessary
  @Input() inheritLineChartOptions: any;
  // Optional callback when historical data had been fetched
  @Input() onDataAvailable: Function;
  // Height of the component
  @Input() widget;

  labels: Array<any> = [];
  dataset: Array<any> = [{ data: [], fill: false, borderWidth: 2 }];
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    }];
  lineChartLegend = false;

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI    - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
  }

  /**
   * Fetch the historic data (Intrinio API) and put the data in a graph
   */
  ngOnInit() {
    this.lineChartOptions = Object.assign(this.lineChartOptions, this.inheritLineChartOptions);
    // For example, if the symbol of intrinio api is $EXUSEU,
    // the data returned will be from Euro to US dollar,
    // In this case, we need to do an inverse to each data point
    // to make sure it is always US dollar to other currency
    const isInverse = this.intrinioId.substr(-2) !== 'US';
    if (!this.intrinioId) { return; }
    this.serverAPI.fetchHistoricData(this.intrinioId).then((data) => {
      const _dataList = [];
      const _labelList = [];
      for (let i = 0; i < data.page_size; i += 1) {
        if (data.data[i]['value']) {
          _dataList.push(isInverse ? (1 / data.data[i]['value']).toPrecision(5)
          : data.data[i]['value']);
          _labelList.push(data.data[i]['date']);
        }
      }
      // The ng2-charts doesn't subscribe for changes on the label list, so the x axis
      // has to be updated via BaseChartDirective
      this.chart.chart.config.data.labels = _labelList;
      this.dataset = [{ data: _dataList }];
      // Check if parent components have registered a callback when the chart data is available
      if (this.onDataAvailable) {
        this.onDataAvailable(_dataList);
      }
    })
    .catch (() => {});
  }
}
