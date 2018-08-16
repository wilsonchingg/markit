package com3014.group3.markit.controller;

import com3014.group3.markit.configuration.CacheConfig;
import com3014.group3.markit.integration.RSSIntegration;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.cache.annotation.Cacheable;

/**
 * A Restful controller that performs operations related the the RSS feed.
 * 
 * @author Wilson Ching
 */
@RestController
public class RSSController {

	/**
	 * Get cached/up-to-date current RSS data in the format of RSS Model, if the
	 * data is obtained freshly from the RSS sources, cache the data for 1 minute.
	 * 
	 * @return A JSON that contains the cached/up-to-date current data in the format
	 *         of RSS Model.
	 */
	@Cacheable(value = CacheConfig.RSS_CACHE)
	@RequestMapping(value = "/api/rss", method = RequestMethod.GET)
	public ResponseEntity<?> getRSSFeed() {
		return new ResponseEntity<>(RSSIntegration.getRSSFeed(50), HttpStatus.OK);
	}
}
