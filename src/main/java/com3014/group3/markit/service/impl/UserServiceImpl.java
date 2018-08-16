package com3014.group3.markit.service.impl;

import com3014.group3.markit.model.User;
import com3014.group3.markit.dao.UserDao;
import com3014.group3.markit.service.UserService;
import com3014.group3.markit.error.FieldNotValidException;
import com3014.group3.markit.error.UserAlreadyExistsException;

import java.util.regex.*;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 */
@Service("userService")
@Transactional
public class UserServiceImpl extends AbstractGenericService<Integer, User> implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public User getByEmail(String email) {
		return userDao.getByEmail(email);
	}

	@Override
	public User verifyUser(String email, String password) {
		User user = getByEmail(email);
		// Checks password with hashed password.
		if (user != null && BCrypt.checkpw(password, user.getPassword())) {
			return user;
		} else {
			return null;
		}
	}

	@Override
	public boolean validateUser(User user, boolean skipEmailCheck) {

		if (!skipEmailCheck && emailAlreadyExists(user.getEmail())) {
			throw new UserAlreadyExistsException("Username is already being used.");
		}
		if (!checkEmail(user.getEmail())) {
			throw new FieldNotValidException("Email must be correct format and less than 100 characters long.");
		}
		if (!checkName(user.getFirstName())) {
			throw new FieldNotValidException(
					"First name must be at least 2 characters long and less than 30 characters long.");
		}
		if (!checkName(user.getLastName())) {
			throw new FieldNotValidException(
					"Last name must be at least 2 characters long and less than 30 characters long.");
		}
		if (!checkPassword(user.getPassword())) {
			throw new FieldNotValidException(
					"Password must be at least 8 characters long and less than 100 characters long.");
		}
		return true;
	}

	@Override
	public boolean emailAlreadyExists(String email) {
		return userDao.getByEmail(email) != null;
	}

	@Override
	public boolean checkEmail(String email) {
		if (email == null)
			return false;

		Pattern pattern = Pattern.compile(
				"(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])");
		Matcher matcher = pattern.matcher(email);

		return email.length() <= 100 && matcher.matches();
	}

	@Override
	public boolean checkName(String name) {
		return name != null && name.length() >= 2 && name.length() <= 30;
	}

	@Override
	public boolean checkPassword(String password) {
		return password != null && password.length() >= 8 && password.length() <= 100;
	}

	@Override
	public String hashPassword(String password) {
		return BCrypt.hashpw(password, BCrypt.gensalt());
	}

	@Override
	public void copy(User user, User userParameters) {
		if (userParameters.getId() > 0)
			user.setId(userParameters.getId());
		if (userParameters.getEmail() != null)
			user.setEmail(userParameters.getEmail());
		if (userParameters.getPassword() != null)
			user.setPassword(userParameters.getPassword());
		if (userParameters.getFirstName() != null)
			user.setFirstName(userParameters.getFirstName());
		if (userParameters.getLastName() != null)
			user.setLastName(userParameters.getLastName());
		if (userParameters.getRole() != null)
			user.setRole(userParameters.getRole());
	}
}