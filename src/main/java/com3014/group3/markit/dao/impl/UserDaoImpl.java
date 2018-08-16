package com3014.group3.markit.dao.impl;

import com3014.group3.markit.model.User;
import com3014.group3.markit.dao.UserDao;

import org.springframework.stereotype.Repository;

/**
 *
 * @author Harry
 */
@Repository("userDao")
public class UserDaoImpl extends AbstractGenericDao<Integer, User> implements UserDao {

	@Override
	public User getByEmail(String email) {
		return (User) getSession().createQuery("FROM User u WHERE email = :email").setParameter("email", email)
				.uniqueResult();
	}
}