package com3014.group3.markit.controller;

import com3014.group3.markit.model.User;
import com3014.group3.markit.model.Market;
import com3014.group3.markit.model.Favourite;
import com3014.group3.markit.service.UserService;
import com3014.group3.markit.service.MarketService;
import com3014.group3.markit.service.FavouriteService;
import com3014.group3.markit.service.impl.JWTAuthenticationServiceImpl;
import com3014.group3.markit.util.GenericResponseEntityWrapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * A Restful controller that performs operations related to the the user's
 * dashboard.
 * 
 * @author Harry Childs, Wilson Ching, George Stitch
 */
@RestController
public class FavouriteController {
	@Autowired
	UserService userService;
	@Autowired
	MarketService marketService;
	@Autowired
	FavouriteService favouriteService;

	/**
	 * Add favourite to user's dashboard.
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @param marketId
	 *            The market a user wishes to add to dashboard.
	 * @return Accepted response if favourite has been added.
	 */
	@RequestMapping(value = "/api/favourite/{marketId}", method = RequestMethod.POST)
	public ResponseEntity<?> addFavourite(@RequestHeader(value = "Authorization") String jwtToken,
			@PathVariable String marketId) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId == null)
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Unauthorized"), HttpStatus.UNAUTHORIZED);

		User user = userService.getById(Integer.parseInt(userId));

		Market market = marketService.getById(Integer.parseInt(marketId));
		Favourite favourite = new Favourite(user, market);

		try {
			if (favouriteService.addFavourite(favourite)) {
				return new ResponseEntity<>(new GenericResponseEntityWrapper("Accepted"), HttpStatus.ACCEPTED);
			} else
				throw new RuntimeException("An unexpected error occured");
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}

	/**
	 * Remove favourite from user's dashboard.
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @param favouriteId
	 *            The favourite a user wishes to remove from their dashboard.
	 * @return Accepted response if favourite has been removed.
	 */
	@RequestMapping(value = "/api/favourite/{favouriteId}", method = RequestMethod.DELETE)
	public ResponseEntity<?> removeFavourite(@RequestHeader(value = "Authorization") String jwtToken,
			@PathVariable String favouriteId) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId == null)
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Unauthorized"), HttpStatus.UNAUTHORIZED);

		Favourite favourite = favouriteService.getById(Integer.parseInt(favouriteId));

		try {
			if (favouriteService.removeFavourite(favourite)) {
				return new ResponseEntity<>(new GenericResponseEntityWrapper("Accepted"), HttpStatus.ACCEPTED);
			} else {
				throw new RuntimeException("An unexpected error occured");
			}
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}
}
