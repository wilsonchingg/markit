package com3014.group3.markit.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The forex entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "forex", schema = "stock")
public class Forex implements Serializable {

	private static final long serialVersionUID = 5162323616807373171L;

	@JsonIgnore
	@Id
	@Column(name = "forex_id", nullable = false, unique = true)
	private int forexId;

	@ManyToOne
	@JoinColumn(name = "market_id", nullable = false)
	private Market market;

	@ManyToOne
	@JoinColumn(name = "currency_id", nullable = false)
	private Currency currency;

	/**
	 * Default Constructor.
	 */
	public Forex() {
	}

	/**
	 * Parametrised Constructor
	 * 
	 * @param market
	 *            The market of which the forex belongs to.
	 * @param currency
	 *            The currency associated with the forex.
	 */
	public Forex(Market market, Currency currency) {
		this.market = market;
		this.currency = currency;
	}

	/**
	 *
	 * @return The ID of the forex.
	 */
	public int getId() {
		return forexId;
	}

	/**
	 *
	 * @param forexId
	 *            The ID of the forex.
	 */
	public void setId(int forexId) {
		this.forexId = forexId;
	}

	/**
	 *
	 * @return The market of which the forex belongs to.
	 */
	public Market getMarket() {
		return market;
	}

	/**
	 *
	 * @param market
	 *            The market of which the forex belongs to.
	 */
	public void setMarket(Market market) {
		this.market = market;
	}

	/**
	 *
	 * @return The currency associated with the forex.
	 */
	public Currency getCurrency() {
		return currency;
	}

	/**
	 *
	 * @param currency
	 *            The currency associated with the forex.
	 */
	public void setCurrency(Currency currency) {
		this.currency = currency;
	}
}
