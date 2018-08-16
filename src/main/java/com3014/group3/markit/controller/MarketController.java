package com3014.group3.markit.controller;

import com3014.group3.markit.model.Forex;
import com3014.group3.markit.service.ForexService;
import com3014.group3.markit.configuration.CacheConfig;
import com3014.group3.markit.integration.IntrinioIntegration;
import com3014.group3.markit.integration.model.Intrinio;
import com3014.group3.markit.integration.model.Yahoo;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * A Restful controller that performs operations related to the markets.
 * 
 * @author Wilson Ching
 */
@RestController
public class MarketController {

	@Autowired
	ForexService forexService;

	/**
	 * Get a list of currency market's information from the database.
	 * 
	 * @return A list of currency market's information
	 */
	@Cacheable(value = CacheConfig.HISTORIC_CACHE)
	@RequestMapping(value = "/api/market/currencies", method = RequestMethod.GET)
	public ResponseEntity<?> getMarkets() {
		List<Forex> markets = forexService.getAll();
		return new ResponseEntity<>(markets, HttpStatus.OK);
	}

	/**
	 * Return a JSON that contains the up-to-date/cached Yahoo finance data.
	 * 
	 * @see com3014.group3.markit.integration.YahooIntegration.getCacheLoader
	 * @return A JSON that contains the up-to-date/cached Yahoo finance data
	 */
	@Cacheable(value = CacheConfig.YAHOO_CACHE, cacheManager = "guavaCacheManager")
	@RequestMapping(method = RequestMethod.GET, value = "/api/market/data/current")
	public Yahoo getCurrentData() {
		// This will never be called because guavaCacheManager will always intercept the
		// method
		// and return a value
		return null;
	}

	/**
	 * A JSON that contains the cached/up-to-date historic data in the format of
	 * Intrinio Model, if the data is obtained freshly from the endpoint (unique
	 * across different currency parameter), cache the data for 1 hour
	 * 
	 * @param intrinioId
	 *            A unique symbol that the Intrinio API could identify e.g. $EXUSUK
	 * @return A JSON that contains the cached/up-to-date historic data in the
	 *         format of Intrinio Model
	 */
	@Cacheable(value = CacheConfig.HISTORIC_CACHE)
	@RequestMapping(method = RequestMethod.GET, value = "/api/market/data/historic/{intrinioId}")
	public @ResponseBody Intrinio getHistoricalData(@PathVariable String intrinioId) {
		System.out.println(intrinioId);
		return IntrinioIntegration.getInstance().request(intrinioId);
	}
}
