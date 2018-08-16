package com3014.group3.markit.dao;

import com3014.group3.markit.model.Market;

/**
 *
 * @author Harry
 */
public interface MarketDao extends GenericDao<Integer, Market> {

	/**
	 *
	 * @param symbol
	 *            The symbol of the market.
	 * @return The market entity from the database.
	 */
	Market getBySymbol(String symbol);

	/**
	 *
	 * @param name
	 *            The name of the market.
	 * @return The market entity from the database.
	 */
	Market getByName(String name);
}
