package com3014.group3.markit.dao;

import com3014.group3.markit.model.User;

/**
 *
 * @author Harry
 */
public interface UserDao extends GenericDao<Integer, User> {

	/**
	 *
	 * @param email
	 *            The email address of the user.
	 * @return The user entity from the database.
	 */
	User getByEmail(String email);
}