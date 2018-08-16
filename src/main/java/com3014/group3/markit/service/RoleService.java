package com3014.group3.markit.service;

import com3014.group3.markit.model.Role;

/**
 *
 * @author Harry
 */
public interface RoleService extends GenericService<Integer, Role> {

	/**
	 *
	 * @param role
	 *            The role name.
	 * @return The role entity.
	 */
	Role getByRole(String role);
}