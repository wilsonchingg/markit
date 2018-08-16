package com3014.group3.markit.integration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com3014.group3.markit.integration.model.Intrinio;
import com3014.group3.markit.integration.model.Intrinio.Data;

import org.apache.commons.codec.binary.Base64;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.nio.charset.Charset;

/**
 * Intrinio API integration implementation
 * 
 * @author Samuel Aigbotsua
 */
public class IntrinioIntegration {

	private static IntrinioIntegration instance;
	private static final String username = "e458da86cfa1136a3006a1780fe1f623";
	private static final String password = "92889af2d80098e222629ac27cf1ddae";
	private RestClient restClient;

	/**
	 * Private constructor for instantiating a singleton
	 */
	private IntrinioIntegration() {
		restClient = new RestClient();
	}

	/**
	 * Singleton pattern
	 */
	public static synchronized IntrinioIntegration getInstance() {
		if (instance == null) {
			instance = new IntrinioIntegration();
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
	 * @return the value of a key in a JSON
	 */
	private String getString(JsonNode node, String key) {
		return node.findValue(key).textValue();
	}

	/**
	 * URL builder for the endpoint
	 * 
	 * @param market
	 *            A unique identifier from Intrinio
	 * @return A valid URL to make a HTTP request
	 */
	private static String getHistoricEndpoint(String market) {
		StringBuilder historicEndPoint = new StringBuilder("https://api.intrinio.com/historical_data?identifier=");
		historicEndPoint.append(market);
		historicEndPoint.append("&item=level");
		System.out.println(historicEndPoint.toString());
		return historicEndPoint.toString();
	}

	/**
	 * Find the double value of a key given a JsonNode
	 * 
	 * @param node
	 *            The JSON object in Java
	 * @param key
	 *            The key that maps to the value
	 * @return the double value of a key in the given JSON
	 */
	private double getDouble(JsonNode node, String key) {
		return node.findValue(key).doubleValue();
	}

	/**
	 * Wrap the JSON Response from the Intrinio endpoint into @Model Intrinio
	 * 
	 * @param response
	 *            Response from the GET request
	 * @return An object encapsulating the RESTful response
	 * @see https://api.intrinio.com/historical_data?identifier=%24DEXCHUS&item=level
	 */
	public Intrinio parseResponse(ResponseEntity<String> response) throws IOException {
		Intrinio intrinio = new Intrinio();
		if (response.getBody() == null)
			return intrinio;
		ObjectMapper mapper = new ObjectMapper();
		JsonNode root = mapper.readTree(response.getBody());
		JsonNode data = root.findValue("data");
		if (data == null)
			return intrinio;
		// Do a reverse for loop because the date from the api is sorted incrementally
		// but we want a decremental list
		for (int i = data.size() - 1; i >= 0; i--) {
			JsonNode node = data.get(i);
			Data dataSource = new Data(getString(node, "date"), getDouble(node, "value"));
			intrinio.addData(dataSource);
		}
		return intrinio;
	}

	/**
	 * Make the external HTTP(s) request and convert the JSON response into object
	 * model
	 * 
	 * @return Object encapsulating the RESTful request
	 * @see https://api.intrinio.com/historical_data?identifier=%24DEXCHUS&item=level
	 */
	public Intrinio request(String currency) {
		try {
			return parseResponse(
					restClient.requestHost(IntrinioIntegration.getHistoricEndpoint(currency), getHeader()));
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
		return new Intrinio();
	}

	/**
	 * Generate an Authorization header based on username and password credential
	 * 
	 * @return a HTTP header
	 */
	private HttpHeaders getHeader() {
		return new HttpHeaders() {
			private static final long serialVersionUID = 7477095333232266193L;
			{
				String auth = username + ":" + password;
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);
				set("Authorization", authHeader);
			}
		};
	}
}
