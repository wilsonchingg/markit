package com3014.group3.markit.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The exchange entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "exchanges", schema = "stock")
public class Exchange implements Serializable {

	private static final long serialVersionUID = -2115465193220742717L;

	@JsonIgnore
	@Id
	@Column(name = "exchange_id", nullable = false, unique = true)
	private int exchangeId;

	@Column(name = "exchange", nullable = false, unique = true)
	private String exchange;

	/**
	 * Default Constructor.
	 */
	public Exchange() {
	}

	/**
	 * Parametrised Constructor.
	 *
	 * @param exchange
	 *            The exchange's name.
	 */
	public Exchange(String exchange) {
		this.exchange = exchange;
	}

	/**
	 *
	 * @return The ID of the exchange.
	 */
	public int getId() {
		return exchangeId;
	}

	/**
	 *
	 * @param exchangeId
	 *            The ID of the exchange.
	 */
	public void setId(int exchangeId) {
		this.exchangeId = exchangeId;
	}

	/**
	 *
	 * @return The exchange's name.
	 */
	public String getExchange() {
		return exchange;
	}

	/**
	 *
	 * @param exchange
	 *            The exchange's name.
	 */
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
}
