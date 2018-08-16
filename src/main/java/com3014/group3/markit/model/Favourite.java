package com3014.group3.markit.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The favourite entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "favourites", schema = "user")
public class Favourite implements Serializable {

	private static final long serialVersionUID = 4426625908040674588L;

	@JsonIgnore
	@Id
	@Column(name = "favourite_id", nullable = false, unique = true)
	private int favouriteId;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@ManyToOne
	@JoinColumn(name = "market_id", nullable = false)
	private Market market;

	/**
	 * Default Constructor.
	 */
	public Favourite() {
	}

	/**
	 * Parametrised Constructor
	 * 
	 * @param user
	 *            The user of which the favourite belongs to.
	 * @param market
	 *            The market associated with the favourite.
	 */
	public Favourite(User user, Market market) {
		this.user = user;
		this.market = market;
	}

	/**
	 *
	 * @return The ID of the favourite.
	 */
	public int getId() {
		return favouriteId;
	}

	/**
	 *
	 * @param favouriteId
	 *            The ID of the favourite.
	 */
	public void setId(int favouriteId) {
		this.favouriteId = favouriteId;
	}

	/**
	 *
	 * @return The user of which the favourite belongs to.
	 */
	public User getUser() {
		return user;
	}

	/**
	 *
	 * @param user
	 *            The user of which the favourite belongs to.
	 */
	public void setUser(User user) {
		this.user = user;
	}

	/**
	 *
	 * @return The market associated with the favourite.
	 */
	public Market getMarket() {
		return market;
	}

	/**
	 *
	 * @param market
	 *            The market associated with the favourite.
	 */
	public void setMarket(Market market) {
		this.market = market;
	}
}