import { Component, OnInit, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * A page which lists all market data, as well as financial RSS feeds
 */
export class MarketComponent implements OnInit {
  searchText = '';
  customClass = 'markit-datatable-nofilter';

	/**
   * Constructor
   */
  constructor() {
  }

	/**
   * ngOnInit
   */
  ngOnInit() {

  }
}
