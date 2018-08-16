package com3014.group3.markit.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The system role entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "roles", schema = "user")
public class Role implements Serializable {

	private static final long serialVersionUID = 1679762520092851445L;

	@JsonIgnore
	@Id
	@Column(name = "role_id", nullable = false, unique = true)
	private int roleId;

	@Column(name = "role", nullable = false, unique = true)
	private String role;

	/**
	 * Default Constructor.
	 */
	public Role() {
	}

	/**
	 * Parametrised Constructor.
	 *
	 * @param role
	 *            The system role's name.
	 */
	public Role(String role) {
		this.role = role;
	}

	/**
	 *
	 * @return The ID of the system role.
	 */
	public int getId() {
		return roleId;
	}

	/**
	 *
	 * @param roleId
	 *            The ID of the system role.
	 */
	public void setId(int roleId) {
		this.roleId = roleId;
	}

	/**
	 *
	 * @return The name of the system role.
	 */
	public String getRole() {
		return role;
	}

	/**
	 *
	 * @param role
	 *            The name of the system role.
	 */
	public void setRole(String role) {
		this.role = role;
	}
}