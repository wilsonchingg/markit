package com3014.group3.markit.service.impl;

import com3014.group3.markit.model.Market;
import com3014.group3.markit.dao.MarketDao;
import com3014.group3.markit.service.MarketService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 */
@Service("marketService")
@Transactional
public class MarketServiceImpl extends AbstractGenericService<Integer, Market> implements MarketService {

	@Autowired
	private MarketDao marketDao;

	@Override
	public Market getBySymbol(String symbol) {
		return marketDao.getBySymbol(symbol);
	}

	@Override
	public Market getByName(String name) {
		return marketDao.getByName(name);
	}
}
