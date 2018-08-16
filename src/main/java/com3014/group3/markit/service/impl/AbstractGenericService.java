package com3014.group3.markit.service.impl;

import com3014.group3.markit.dao.GenericDao;
import com3014.group3.markit.service.GenericService;

import java.util.List;
import java.io.Serializable;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 * @param <PK>
 *            Generic type of id to be used
 * @param <T>
 *            Generic type of object to be used.
 */
@Service("genericService")
@Transactional
public abstract class AbstractGenericService<PK extends Serializable, T> implements GenericService<PK, T> {

	@Autowired
	private GenericDao<PK, T> genericDao;

	@Override
	public List<T> getAll() {
		return (List<T>) genericDao.getAll();
	}

	@Override
	public T getById(PK id) {
		return (T) genericDao.getById(id);
	}

	@Override
	public void persist(T entity) {
		genericDao.persist(entity);
	}

	@Override
	public void update(T entity) {
		genericDao.update(entity);
	}

	@Override
	public void delete(T entity) {
		genericDao.delete(entity);
	}
}