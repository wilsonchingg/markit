package com3014.group3.markit.dao.impl;

import com3014.group3.markit.model.Role;
import com3014.group3.markit.dao.RoleDao;

import org.springframework.stereotype.Repository;

/**
 *
 * @author Harry
 */
@Repository("roleDao")
public class RoleDaoImpl extends AbstractGenericDao<Integer, Role> implements RoleDao {

	@Override
	public Role getByRole(String role) {
		return (Role) getSession().createQuery("FROM Role r WHERE role = :role").setParameter("role", role)
				.uniqueResult();
	}
}