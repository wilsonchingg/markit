import { Injectable, OnInit } from '@angular/core';
import { ServerAPI } from './server-api.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/**
 * Make server requests regularly and allow other components to access the data
 * it obtained
 */
@Injectable()
export class DataStreamService {
  currentList = new ReplaySubject(1);

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI  - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
    this.fetch = this.fetch.bind(this);
    this.fetch();
    setInterval(() => {
      this.fetch();
    },          10000);
  }

  /**
   * Fetch the Yahoo finance API data from our server
   */
  fetch() {
    this.serverAPI.fetchCurrentData()
    .then((data) => {
      if (data.count) {
        this.currentList.next(data);
      }
    });
  }

}
