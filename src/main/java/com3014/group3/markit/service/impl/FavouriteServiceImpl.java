package com3014.group3.markit.service.impl;

import com3014.group3.markit.model.Favourite;
import com3014.group3.markit.dao.FavouriteDao;
import com3014.group3.markit.service.FavouriteService;
import com3014.group3.markit.error.AlreadyFavouritedException;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 */
@Service("favouriteService")
@Transactional
public class FavouriteServiceImpl extends AbstractGenericService<Integer, Favourite> implements FavouriteService {

	@Autowired
	private FavouriteDao favouriteDao;

	@Override
	public boolean alreadyFavourited(Favourite favourite) {
		return favouriteDao.alreadyFavourited(favourite);
	}

	@Override
	public boolean addFavourite(Favourite favourite) {
		if (alreadyFavourited(favourite)) {
			throw new AlreadyFavouritedException("That market has already been favourited.");
		} else {
			favouriteDao.persist(favourite);
			return true;
		}
	}

	@Override
	public boolean removeFavourite(Favourite favourite) {
		favouriteDao.delete(favourite);
		return true;
	}
}