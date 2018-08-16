package com3014.group3.markit.dao.impl;

import com3014.group3.markit.dao.GenericDao;

import java.util.List;
import java.io.Serializable;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import java.lang.reflect.ParameterizedType;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Harry
 * @param <PK>
 *            Generic type of id to be used
 * @param <T>
 *            Generic type of object to be used.
 */

@Repository("genericDao")
public abstract class AbstractGenericDao<PK extends Serializable, T> implements GenericDao<PK, T> {

	@Autowired
	private SessionFactory sessionFactory;
	private final Class<? extends T> entityClass;

	@SuppressWarnings("unchecked")
	public AbstractGenericDao() {
		// Get class to be used by session.
		this.entityClass = (Class<T>) ((ParameterizedType) this.getClass().getGenericSuperclass())
				.getActualTypeArguments()[1];
	}

	protected Session getSession() {
		Session session = sessionFactory.getCurrentSession();
		if ((null == session) || (session.isOpen() == false)) {
			System.out.println("Session timed out, reopening session");
			session = sessionFactory.openSession();
		}
		return session;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> getAll() {
		return (List<T>) getSession().createCriteria(entityClass).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public T getById(PK id) {
		return (T) getSession().get(entityClass, id);
	}

	@Override
	public void persist(T entity) {
		getSession().persist(entity);
	}

	@Override
	public void update(T entity) {
		getSession().update(entity);
	}

	@Override
	public void delete(T entity) {
		getSession().delete(entity);
	}
}