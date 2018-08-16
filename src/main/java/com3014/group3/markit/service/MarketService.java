package com3014.group3.markit.service;

import com3014.group3.markit.model.Market;

/**
 *
 * @author Harry
 */
public interface MarketService extends GenericService<Integer, Market> {

	/**
	 *
	 * @param symbol
	 *            The symbol of the market.
	 * @return The market entity.
	 */
	Market getBySymbol(String symbol);

	/**
	 *
	 * @param name
	 *            The name of the market.
	 * @return The market entity.
	 */
	Market getByName(String name);
}
