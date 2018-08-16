package com3014.group3.markit.model;

import java.sql.Blob;
import javax.persistence.*;
import java.io.Serializable;
import org.hibernate.annotations.Type;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The user setting entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "settings", schema = "user")
public class UserSetting implements Serializable {

	private static final long serialVersionUID = -6086339530974952984L;

	@JsonIgnore
	@Id
	@Column(name = "setting_id", nullable = false, unique = true)
	private int userSettingId;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false, unique = true)
	private User user;

	@Column(name = "image", nullable = true)
	private Blob image;

	@Column(name = "notifications", nullable = true)
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean notifications;

	/**
	 * Default Constructor.
	 */
	public UserSetting() {
	}

	/**
	 * Parametrised Constructor.
	 * 
	 * @param user
	 *            The user of which the setting belongs to.
	 * @param image
	 *            The image icon for the user profile.
	 * @param notifications
	 *            The notifications setting for the user.
	 */
	public UserSetting(User user, Blob image, boolean notifications) {
		this.user = user;
		this.image = image;
		this.notifications = notifications;
	}

	/**
	 *
	 * @return The ID of the user setting.
	 */
	public int getId() {
		return userSettingId;
	}

	/**
	 *
	 * @param userSettingId
	 *            The ID of the user setting.
	 */
	public void setId(int userSettingId) {
		this.userSettingId = userSettingId;
	}

	/**
	 *
	 * @return The user of which the setting belongs to.
	 */
	public User getUser() {
		return user;
	}

	/**
	 *
	 * @param user
	 *            The user of which the setting belongs to.
	 */
	public void setUser(User user) {
		this.user = user;
	}

	/**
	 *
	 * @return The image icon for the user profile.
	 */
	public Blob getImage() {
		return image;
	}

	/**
	 *
	 * @param image
	 *            The image icon for the user profile.
	 */
	public void setImage(Blob image) {
		this.image = image;
	}

	/**
	 *
	 * @return The notifications setting for the user.
	 */
	public boolean isNotifications() {
		return notifications;
	}

	/**
	 *
	 * @param notifications
	 *            The notifications setting for the user.
	 */
	public void setNotifications(boolean notifications) {
		this.notifications = notifications;
	}
}