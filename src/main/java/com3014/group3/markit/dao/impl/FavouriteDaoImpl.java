package com3014.group3.markit.dao.impl;

import com3014.group3.markit.model.Favourite;
import com3014.group3.markit.dao.FavouriteDao;

import org.springframework.stereotype.Repository;

/**
 *
 * @author Harry
 */
@Repository("favouriteDao")
public class FavouriteDaoImpl extends AbstractGenericDao<Integer, Favourite> implements FavouriteDao {

	@Override
	public boolean alreadyFavourited(Favourite favourite) {
		return getSession().createQuery("FROM Favourite f WHERE market = :market AND user = :user")
				.setParameter("user", favourite.getUser()).setParameter("market", favourite.getMarket())
				.uniqueResult() != null;
	}
}