package com3014.group3.markit.dao;

import com3014.group3.markit.model.Favourite;

/**
 *
 * @author Harry
 */
public interface FavouriteDao extends GenericDao<Integer, Favourite> {

	/**
	 *
	 * @param favourite
	 *            The user's favourite.
	 * @return True if user has market already favourited in database.
	 */
	boolean alreadyFavourited(Favourite favourite);
}
