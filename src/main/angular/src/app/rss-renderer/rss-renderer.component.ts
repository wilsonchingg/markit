import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-rss-renderer',
  templateUrl: './rss-renderer.component.html',
  styleUrls: ['./rss-renderer.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * RSS View Component
 */
export class RssRendererComponent implements OnInit {
	// Height of the component
  @Input()
	height = 1500;

	// List of RSS feeds
  rssList: { title: string, creator: string, link: string,
    description: string, createdDate: Date, uri: string}[] = [];

	/**
   * Constructor
   * @param  {serverAPI}   ServerAPI   - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
    this.fetchRSS = this.fetchRSS.bind(this);
  }

	/**
   * Inject dynamically generated css into the component
   */
  getContainerStyle() {
    return { height: this.height + 'px' };
  }

	/**
   * Fetch RSS from the endpoint
   */
  fetchRSS() {
    this.serverAPI.getRSSFeed().then((response) => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((result) => {
          const _rssList = [];
          for (let i = 0; i < result.length; i += 1) {
            result[i].createdDate = new Date(result[i].createdDate);
            _rssList.push(result[i]);
          }
          this.rssList = _rssList;
        }).catch(() => {});
      }
    }).catch(() => {});
  }

	/**
   * ngOnInit
   */
  ngOnInit() {
    this.fetchRSS();
  }
}
