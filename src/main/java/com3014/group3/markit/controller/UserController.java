package com3014.group3.markit.controller;

import com3014.group3.markit.model.User;
import com3014.group3.markit.model.Favourite;
import com3014.group3.markit.service.RoleService;
import com3014.group3.markit.service.UserService;
import com3014.group3.markit.service.impl.JWTAuthenticationServiceImpl;
import com3014.group3.markit.util.GenericResponseEntityWrapper;

import java.util.Set;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * A Restful controller that performs operations related to the user object.
 * 
 * @author Wilson Ching, George Stitch, Harry Childs
 */
@RestController
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	RoleService roleService;

	/**
	 * Get user detail given a JWT token.
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @return A user object if JWT is valid, an unauthorized response otherwise.
	 */
	@RequestMapping(value = "/api/user", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@RequestHeader(value = "Authorization") String jwtToken) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId == null) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Unauthorized"), HttpStatus.UNAUTHORIZED);
		}

		User user = userService.getById(Integer.valueOf(userId));
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	/**
	 * Create a new user in the database based on user input.
	 * 
	 * @param userParameter
	 *            User input sent from the client parsed to User object.
	 * @return An accepted response if the user is successfully authenticated, or an
	 *         error message otherwise.
	 */
	@RequestMapping(value = "/api/user", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@RequestBody User userParameter) {

		try {
			if (userService.validateUser(userParameter, false)) {

				userParameter.setRole(roleService.getByRole("User"));
				userParameter.setPassword(userService.hashPassword(userParameter.getPassword()));

				userService.persist(userParameter);
				return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
			} else
				throw new RuntimeException("An unexpected error occured");
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}

	/**
	 * Authenticate a user
	 * 
	 * @param userParameter
	 *            User input sent from the client parsed to User object.
	 * @return A JWT token if login is successful, an error message otherwise.
	 */
	@RequestMapping(value = "/api/user/login", method = RequestMethod.POST)
	public ResponseEntity<?> loginUser(@RequestBody User userParameter) {

		if (userParameter.getEmail() == null || userParameter.getPassword() == null) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Incorrect username or password"),
					HttpStatus.UNAUTHORIZED);
		}

		User requestUser = userService.verifyUser(userParameter.getEmail(), userParameter.getPassword());

		// If requestUser is null, either the password does not match or the email is
		// not found.
		if (requestUser != null) {
			String jwt = JWTAuthenticationServiceImpl.getJWTToken(String.valueOf(requestUser.getId()));
			return new ResponseEntity<>(new GenericResponseEntityWrapper(jwt), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Incorrect username or password"),
					HttpStatus.UNAUTHORIZED);
		}
	}

	/**
	 * Update the user details.
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @param userParameter
	 *            User input sent from the client parsed to User object.
	 * @return Accepted response if update has been successful.
	 */
	@RequestMapping(value = "/api/user", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@RequestHeader(value = "Authorization") String jwtToken,
			@RequestBody User userParameter) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId == null)
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Unauthorized"), HttpStatus.UNAUTHORIZED);

		if (userParameter.getPassword() != null) {
			userParameter.setPassword(userService.hashPassword(userParameter.getPassword()));
		}

		try {
			User user = userService.getById(Integer.valueOf(userId));
			userService.copy(user, userParameter);
			if (userService.validateUser(user, userParameter.getEmail() == null)) {
				userService.update(user);
			} else
				throw new RuntimeException("An unexpected error occured"); //

		} catch (RuntimeException e) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper(e.getMessage()), HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
	}

	/**
	 * Get a list of user favourites
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @return A list of user favourites if JWT is valid, an unauthorized response
	 *         otherwise.
	 */
	@RequestMapping(value = "/api/user/favourites", method = RequestMethod.GET)
	public ResponseEntity<?> getFavourites(@RequestHeader(value = "Authorization") String jwtToken) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId == null) {
			return new ResponseEntity<>(new GenericResponseEntityWrapper("Unauthorized"), HttpStatus.UNAUTHORIZED);
		}

		User user = userService.getById(Integer.parseInt(userId));
		Set<Favourite> favourites = user.getFavourites();

		return new ResponseEntity<>(favourites, HttpStatus.OK);
	}

	/**
	 * Check if the JWT token is valid
	 * 
	 * @param jwtToken
	 *            JWT token.
	 * @return An OK reponse if the JWT token valid, an unauthorized status
	 *         otherwise.
	 */
	@RequestMapping(value = "/api/oauth", method = RequestMethod.GET)
	public ResponseEntity<?> validateJwt(@RequestHeader(value = "Authorization") String jwtToken) {

		String userId = JWTAuthenticationServiceImpl.getUserId(jwtToken);
		if (userId != null) {
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
		}
	}
}