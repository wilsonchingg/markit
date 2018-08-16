package com3014.group3.markit.integration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.cache.CacheLoader;
import com.google.common.util.concurrent.Futures;
import com.google.common.util.concurrent.ListenableFuture;

import com3014.group3.markit.integration.model.Yahoo;
import com3014.group3.markit.integration.model.Yahoo.Resources;

/**
 * Yahoo finance API integration implementation
 * 
 * @author Wilson Ching
 */
public class YahooIntegration {
	// API endpoint from Yahoo that returns the latest currencies update
	public static final String currentEndpoint = "https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?view=basic&format=json";

	private static YahooIntegration instance;
	private RestClient restClient;

	/**
	 * Private constructor for the instantiating a singleton
	 */
	private YahooIntegration() {
		restClient = new RestClient();
	}

	/**
	 * Singleton pattern
	 */
	public static synchronized YahooIntegration getInstance() {
		if (instance == null) {
			instance = new YahooIntegration();
		}
		return instance;
	}

	/**
	 * Find the string value of a key given a JsonNode
	 * 
	 * @param node
	 *            The JSON object in Java
	 * @param key
	 *            The key that maps to the value
	 * @return the value of a key in the given JSON
	 */
	private String getString(JsonNode node, String key) {
		JsonNode stringNode = node.findValue(key);
		return stringNode == null ? "0" : stringNode.textValue();
	}

	/**
	 * Wrap the JSON Response from the Yahoo endpoint into @Model Yahoo
	 * 
	 * @param response
	 *            Response from the GET request
	 * @return Object encapsulating the RESTful response
	 * @see https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json
	 */
	public Yahoo parseResponse(ResponseEntity<String> response) throws IOException {
		Yahoo yahoo = new Yahoo();
		if (response.getBody() == null) {
			return yahoo;
		}
		ObjectMapper mapper = new ObjectMapper();
		JsonNode root = mapper.readTree(response.getBody());
		JsonNode resources = root.findValue("resources");

		// Sometimes Yahoo will return empty array, in this case, throw an exception
		if (resources.size() == 0) {
			throw new IOException();
		}
		// There are duplicate entries from the Yahoo API, for example
		// Chinese Yen market has two entries, so filtering is needed to find
		// unique entries
		List<String> uniqueNames = new ArrayList<String>();
		for (int i = 0; i < resources.size(); i++) {
			JsonNode node = resources.get(i).findValue("resource").findValue("fields");
			if (uniqueNames.indexOf(getString(node, "name")) < 0) {
				Resources resourceObj = new Resources(getString(node, "name"), getString(node, "price"),
						getString(node, "symbol"), getString(node, "utctime"), getString(node, "change"),
						getString(node, "chg_percent"));
				uniqueNames.add(getString(node, "name"));
				yahoo.addResources(resourceObj);
			}

		}
		return yahoo;
	}

	/**
	 * Compute the new cache value based on the latest data obtained from Yahoo
	 * finance API and the previous cached data. This is needed because sometimes
	 * the data returned from Yahoo is malformed. This method makes the best effort
	 * to maintain the integrity of our data
	 * 
	 * @param oldCache
	 *            the cache stored previously
	 * @param newCache
	 *            the latest data obtained from Yahoo finance API
	 * @return the new cache value
	 */
	public static Yahoo mergeCache(Yahoo oldCache, Yahoo newCache) {
		// Unexpected error in the latest fetching
		if (newCache.getCount() == 0) {
			return oldCache;
		}
		// If the new cache has zero market currency changes, that means Yahoo is
		// returning some invalid data
		// In this case, replace the value with the value from the previous cache
		for (int i = 0; i < newCache.getCount(); i += 1) {
			if (newCache.getResources().get(i).getChange() == 0) {
				for (int j = 0; j < oldCache.getCount(); j += 1) {
					if (oldCache.getResources().get(j).getName().equals(newCache.getResources().get(i).getName())) {
						newCache.getResources().get(i).setChange(oldCache.getResources().get(j).getChange());
						newCache.getResources().get(i)
								.setChangePercent(oldCache.getResources().get(j).getChangePercent());
					}
				}
			}
		}
		return newCache;
	}

	/**
	 * Make the external HTTP(s) request and convert the JSON response into object
	 * model
	 * 
	 * @return Object encapsulating the RESTful request
	 * @see https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json
	 * @return Yahoo finance data, or an empty model if there are errors in the
	 *         fetching
	 */
	public Yahoo request() {
		try {
			ResponseEntity<String> response = restClient.request(YahooIntegration.currentEndpoint);
			return parseResponse(response);
		} catch (Exception e) {
			System.out.println("Yahoo finance API response is malformed, returning the previous cache value");
		}
		return new Yahoo();
	}

	/**
	 * Specify how cache is being computed for Yahoo finance API
	 * 
	 * @return a CacheLoader object used for GuavaCacheManager initialization
	 */
	public static CacheLoader<Object, Object> getCacheLoader() {
		return new CacheLoader<Object, Object>() {
			// If the cache is empty
			public Object load(Object key) {
				return YahooIntegration.getInstance().request();
			}

			// If there is an existing cache value
			public ListenableFuture<Object> reload(Object key, Object oldValue) {
				Yahoo newValue = YahooIntegration.getInstance().request();
				return Futures.immediateFuture((Object) YahooIntegration.mergeCache((Yahoo) oldValue, newValue));
			}
		};
	}
}
