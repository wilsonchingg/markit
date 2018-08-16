package com3014.group3.markit.integration;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

/**
 * A generic class that uses RestTemplate to make HTTP requests
 * 
 * @author Wilson Ching, Samuel Aigbotsua
 *
 */
public class RestClient {
	private RestTemplate restTemplate;

	public RestClient() {
		restTemplate = new RestTemplate();
	}

	/**
	 * Make a GET request and convert the response body to string
	 * 
	 * @param url
	 *            The url to make the request
	 * @return A ResponseEntity object with a stringified body
	 */
	public ResponseEntity<String> request(String url) {
		return restTemplate.getForEntity(url, String.class);
	}

	/**
	 * Make a GET request with custom header and convert the response body to string
	 * 
	 * @param url
	 *            The url to make the request
	 * @param header
	 *            Custom HTTP header
	 * @return A ResponseEntity object with a stringified body
	 */
	public <T> ResponseEntity<String> requestHost(String url, HttpHeaders header) {
		return restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<T>(header), String.class);
	}
}
