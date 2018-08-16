package com3014.group3.markit.dao.impl;

import com3014.group3.markit.model.Market;
import com3014.group3.markit.dao.MarketDao;

import org.springframework.stereotype.Repository;

/**
 *
 * @author Harry
 */
@Repository("marketDao")
public class MarketDaoImpl extends AbstractGenericDao<Integer, Market> implements MarketDao {

	@Override
	public Market getBySymbol(String symbol) {
		return (Market) getSession().createQuery("FROM Market m WHERE symbol = :symbol").setParameter("symbol", symbol)
				.uniqueResult();
	}

	@Override
	public Market getByName(String name) {
		return (Market) getSession().createQuery("FROM Market m WHERE name = :name").setParameter("name", name)
				.uniqueResult();
	}
}
