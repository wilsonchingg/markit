import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Home page
 */
export class HomepageComponent implements OnInit {

	/**
   * Constructor
   */
  constructor() { }

	/**
   * ngOnInit
   */
  ngOnInit() {
  }

}
