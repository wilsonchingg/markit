package com3014.group3.markit.integration.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

/**
 * Yahoo finance API data model used for Jackson parsing
 * 
 * @author Wilson Ching
 */
@Entity
public class Yahoo {

	private int count;
	private List<Resources> resources;

	/**
	 * Constructor
	 */
	public Yahoo() {
		count = 0;
		resources = new ArrayList<Resources>();
	}

	/**
	 * 
	 * @return the number of currency market entries
	 */
	public int getCount() {
		return count;
	}

	/**
	 * 
	 * @return a list of currency market entries
	 */
	public List<Resources> getResources() {
		return resources;
	}

	/**
	 * Add a currency market entry to the list
	 * 
	 * @param resource
	 *            the currency entry to be added
	 */
	public void addResources(Resources resource) {
		resources.add(resource);
		count++;
	}

	/**
	 * A single currency market entry from the Yahoo finance API
	 */
	public static class Resources {

		private String name;
		private double price;
		private String symbol;
		private String utctime;
		private double changePercent;
		private double change;

		/**
		 * 
		 * @param name
		 *            name of the currency market, such as USD/GBP
		 * @param price
		 *            price quote at a given time
		 * @param symbol
		 *            symbol of the currency, such as GBP=X
		 * @param utctime
		 *            date of the price quote
		 * @param change
		 *            change of the currency price
		 * @param changePercent
		 *            change of the currency price in percentage
		 */
		public Resources(String name, String price, String symbol, String utctime, String change,
				String changePercent) {
			this.name = name;
			this.price = Double.parseDouble(price);
			this.symbol = symbol;

			this.utctime = utctime;
			this.changePercent = Double.parseDouble(changePercent);
			this.change = Double.parseDouble(change);
		}

		/**
		 * 
		 * @return name of the currency market, such as USD/GBP
		 */
		public String getName() {
			return name;
		}

		/**
		 * 
		 * @return price quote at a given time
		 */
		public double getPrice() {
			return price;
		}

		/**
		 * 
		 * @return symbol of the currency, such as GBP=X
		 */
		public String getSymbol() {
			return symbol;
		}

		/**
		 * Update the change of the currency price in percentage
		 * 
		 * @param changePercent
		 *            the change of the currency price in percentage
		 */
		public void setChangePercent(double changePercent) {
			this.changePercent = changePercent;
		}

		/**
		 * Update the latest change in currency market
		 * 
		 * @param change
		 *            the change of the currency price
		 */
		public void setChange(double change) {
			this.change = change;
		}

		/**
		 * 
		 * @return the latest change of the currency market in percentage
		 */
		public double getChangePercent() {
			return changePercent;
		}

		/**
		 * 
		 * @return the latest change of the currency market
		 */
		public double getChange() {
			return change;
		}

		/**
		 * 
		 * @return date of the price quote, such as 2017-12-27T18:00:42+0000
		 */
		public String getUtctime() {
			return utctime;
		}

	}
}
