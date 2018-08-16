package com3014.group3.markit.model;

import java.util.Set;
import java.util.Date;
import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The user entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "users", schema = "user")
public class User implements Serializable {

	private static final long serialVersionUID = -3468192662281420610L;

	@JsonIgnore
	@Id
	@Column(name = "user_id", nullable = false, unique = true)
	private int userId;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "password", nullable = false)
	private String password;

	@JsonIgnore
	@Temporal(javax.persistence.TemporalType.DATE)
	@Column(name = "last_logged_in", nullable = false)
	private Date lastLoggedIn;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "role_id", nullable = false)
	private Role role;

	/**
	 * Bidirectional and closed entity mapping of the user's favourite markets.
	 */
	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	private Set<Favourite> favourites;

	/**
	 * Bidirectional and closed entity mapping of the user's settings.
	 */
	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	private Set<UserSetting> userSettings;

	/**
	 * Default Constructor.
	 */
	public User() {
	}

	/**
	 * Parametrised Constructor.
	 *
	 * @param email
	 *            The email address of the user.
	 * @param firstName
	 *            The user's first name.
	 * @param lastName
	 *            The user's last name.
	 * @param password
	 *            The user's hashed password.
	 * @param role
	 *            The system role of the user.
	 */
	public User(String email, String firstName, String lastName, String password, Role role) {
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.role = role;
	}

	/**
	 *
	 * @return The ID of the user.
	 */
	public int getId() {
		return userId;
	}

	/**
	 *
	 * @param userId
	 *            The ID of the user.
	 */
	public void setId(int userId) {
		this.userId = userId;
	}

	/**
	 *
	 * @return The email address of the user.
	 */
	public String getEmail() {
		return email;
	}

	/**
	 *
	 * @param email
	 *            The email address of the user.
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 *
	 * @return The first name of the user.
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 *
	 * @param firstName
	 *            The first name of the user.
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 *
	 * @return The last name of the user.
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 *
	 * @param lastName
	 *            The last name of the user.
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 *
	 * @return The hashed password of the user.
	 */
	public String getPassword() {
		return password;
	}

	/**
	 *
	 * @param password
	 *            The hashed password of the user.
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 *
	 * @return The last login date of the user.
	 */
	public Date getLastLoggedIn() {
		return lastLoggedIn;
	}

	/**
	 *
	 * @param lastLoggedIn
	 *            The last login date of the user.
	 */
	public void setLastLoggedIn(Date lastLoggedIn) {
		this.lastLoggedIn = lastLoggedIn;
	}

	/**
	 *
	 * @return The system role of the user.
	 */
	public Role getRole() {
		return role;
	}

	/**
	 *
	 * @param role
	 *            The system role of the user.
	 */
	public void setRole(Role role) {
		this.role = role;
	}

	/**
	 *
	 * @return The user's favourite markets.
	 */
	public Set<Favourite> getFavourites() {
		return favourites;
	}

	/**
	 *
	 * @param favourites
	 *            The user's favourite markets.
	 */
	public void setFavourites(Set<Favourite> favourites) {
		this.favourites = favourites;
	}

	/**
	 *
	 * @return The user's settings.
	 */
	public Set<UserSetting> getUserSettings() {
		return userSettings;
	}

	/**
	 *
	 * @param userSettings
	 *            The user's settings.
	 */
	public void setUserSettings(Set<UserSetting> userSettings) {
		this.userSettings = userSettings;
	}
}