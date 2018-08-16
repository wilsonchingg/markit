package com3014.group3.markit.service;

import com3014.group3.markit.model.Favourite;

/**
 *
 * @author Harry
 */
public interface FavouriteService extends GenericService<Integer, Favourite> {

	/**
	 *
	 * @param favourite
	 *            The user's favourite.
	 * @return True if user has market already in favourites.
	 */
	boolean alreadyFavourited(Favourite favourite);

	/**
	 *
	 * @param favourite
	 *            The user's favourite.
	 * @return True if successfully added
	 */
	boolean addFavourite(Favourite favourite);

	/**
	 *
	 * @param favourite
	 *            The user's favourite.
	 * @return True if successfully removed.
	 */
	boolean removeFavourite(Favourite favourite);
}
