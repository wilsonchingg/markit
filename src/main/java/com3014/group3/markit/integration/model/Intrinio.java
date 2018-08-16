package com3014.group3.markit.integration.model;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

/**
 * Wrapper for Intrinio API response
 * 
 * @author Samuel Aigbotsua
 */
@Entity
public class Intrinio {

	private int page_size;
	private List<Data> data;

	/**
	 * Empty Constructor
	 */
	public Intrinio() {
		this.page_size = 0;
		this.data = new ArrayList<>();
	}

	/**
	 * Add a historic market value record
	 * 
	 * @param data
	 *            The historic market value record
	 */
	public void addData(Data data) {
		this.data.add(data);
		page_size++;
	}

	/**
	 *
	 * @return A list of historic market values
	 */
	public List<Data> getData() {
		return data;
	}

	/**
	 *
	 * @return the number of data entries in this wrapper
	 */
	public int getPage_size() {
		return page_size;
	}

	/**
	 * A date to market value pair
	 */
	public static class Data {

		private String date;
		private double value;

		/**
		 * Parameterised Constructor
		 * 
		 * @param date
		 *            date of the historic record
		 * @param value
		 *            value of the market
		 */
		public Data(String date, double value) {
			this.date = date;
			this.value = value;
		}

		/**
		 * 
		 * @return date of the historic record
		 */
		public String getDate() {
			return date;
		}

		/**
		 * 
		 * @return value of the market in this data entry
		 */
		public double getValue() {
			return value;
		}
	}
}
