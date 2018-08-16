package com3014.group3.markit.model;

import java.util.Set;
import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The market entity model
 *
 * @author Harry
 */
@Entity
@Table(name = "markets", schema = "stock")
public class Market implements Serializable {

	private static final long serialVersionUID = -5483401229591707750L;

	@Id
	@Column(name = "market_id", nullable = false, unique = true)
	private int marketId;

	@Column(name = "symbol", nullable = false, unique = true)
	private String symbol;

	@Column(name = "name", nullable = false, unique = true)
	private String name;

	@ManyToOne
	@JoinColumn(name = "exchange_id", nullable = false)
	private Exchange exchange;

	/**
	 * Bidirectional and closed entity mapping of favourites which contain the
	 * market.
	 */
	@JsonIgnore
	@OneToMany(mappedBy = "market")
	private Set<Favourite> favourites;

	/**
	 * Default Constructor.
	 */
	public Market() {
	}

	/**
	 * Parametrised Constructor.
	 *
	 * @param symbol
	 *            The symbol of the market.
	 * @param name
	 *            The name of the market.
	 */
	public Market(String symbol, String name) {
		this.symbol = symbol;
		this.name = name;
	}

	/**
	 *
	 * @return The ID of the market.
	 */
	public int getId() {
		return marketId;
	}

	/**
	 *
	 * @param marketId
	 *            The ID of the market.
	 */
	public void setId(int marketId) {
		this.marketId = marketId;
	}

	/**
	 *
	 * @return The symbol of the market.
	 */
	public String getSymbol() {
		return symbol;
	}

	/**
	 *
	 * @param symbol
	 *            The symbol of the market.
	 */
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	/**
	 *
	 * @return The name of the market.
	 */
	public String getName() {
		return name;
	}

	/**
	 *
	 * @param name
	 *            The name of the market.
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 *
	 * @param exchange
	 *            The name of the exchange the market belongs to.
	 */
	public Exchange getExchange() {
		return exchange;
	}

	/**
	 *
	 * @param exchange
	 *            The name of the exchange the market belongs to.
	 */
	public void setExchange(Exchange exchange) {
		this.exchange = exchange;
	}

	/**
	 *
	 * @return The favourites which contain the market.
	 */
	public Set<Favourite> getFavourites() {
		return favourites;
	}

	/**
	 *
	 * @param favourites
	 *            The favourites which contain the market.
	 */
	public void setFavourites(Set<Favourite> favourites) {
		this.favourites = favourites;
	}
}