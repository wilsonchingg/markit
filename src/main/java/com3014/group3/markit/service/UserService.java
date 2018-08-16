package com3014.group3.markit.service;

import com3014.group3.markit.model.User;

/**
 *
 * @author Harry
 */
public interface UserService extends GenericService<Integer, User> {

	/**
	 *
	 * @param email
	 *            The email address of the user.
	 * @return The user entity.
	 */
	User getByEmail(String email);

	/**
	 *
	 * @param email
	 *            The email address of the user.
	 * @param password
	 *            The password used by the user.
	 * @return The user entity.
	 */
	User verifyUser(String email, String password);

	/**
	 *
	 * @param user
	 *            The user entity.
	 * @param skipEmailCheck
	 *            rather to perform email duplicate check
	 * @return True if email is in a valid format and doesn't already exist.
	 */
	boolean validateUser(User user, boolean skipEmailCheck);

	/**
	 *
	 * @param email
	 *            The email of the user.
	 * @return True if email already exists.
	 */
	boolean emailAlreadyExists(String email);

	/**
	 *
	 * @param email
	 *            The email of the user.
	 * @return True if email is valid.
	 */
	boolean checkEmail(String email);

	/**
	 *
	 * @param name
	 *            The name of the user.
	 * @return True if name is valid.
	 */
	boolean checkName(String name);

	/**
	 *
	 * @param password
	 *            The user's password.
	 * @return True if password is valid.
	 */
	boolean checkPassword(String password);

	/**
	 *
	 * @param password
	 *            The password used by the user.
	 * @return The hashed password.
	 */
	String hashPassword(String password);

	/**
	 * Copies non-null user credentials over to matching user entity.
	 * 
	 * @param user
	 *            The user entity.
	 * @param userParameters
	 *            The user credentials used.
	 */
	void copy(User user, User userParameters);
}