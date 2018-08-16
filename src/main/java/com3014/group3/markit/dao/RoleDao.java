package com3014.group3.markit.dao;

import com3014.group3.markit.model.Role;

/**
 *
 * @author Harry
 */
public interface RoleDao extends GenericDao<Integer, Role> {

	/**
	 *
	 * @param role
	 *            The role name.
	 * @return The role entity from the database.
	 */
	Role getByRole(String role);
}