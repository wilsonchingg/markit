package com3014.group3.markit.dao;

import java.util.List;
import java.io.Serializable;

/**
 *
 * @author Harry
 * @param <PK>
 *            Generic type of id to be used
 * @param <T>
 *            Generic type of object to be used.
 */
public interface GenericDao<PK extends Serializable, T> {

	/**
	 *
	 * @return All entities with type T from the database.
	 */
	List<T> getAll();

	/**
	 *
	 * @param id
	 *            The id of the entity.
	 * @return The entity with type T from the database.
	 */
	T getById(PK id);

	/**
	 *
	 * @param entity
	 *            Save the entity with type T to the database.
	 */
	void persist(T entity);

	/**
	 *
	 * @param entity
	 *            Update the entity with type T to the database.
	 */
	void update(T entity);

	/**
	 *
	 * @param entity
	 *            Delete the entity with type T from the database.
	 */
	void delete(T entity);
}