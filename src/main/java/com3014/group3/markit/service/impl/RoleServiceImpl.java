package com3014.group3.markit.service.impl;

import com3014.group3.markit.model.Role;
import com3014.group3.markit.dao.RoleDao;
import com3014.group3.markit.service.RoleService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 */
@Service("roleService")
@Transactional
public class RoleServiceImpl extends AbstractGenericService<Integer, Role> implements RoleService {

	@Autowired
	private RoleDao roleDao;

	@Override
	public Role getByRole(String role) {
		return roleDao.getByRole(role);
	}
}