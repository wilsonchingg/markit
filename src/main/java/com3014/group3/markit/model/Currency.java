package com3014.group3.markit.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The currency entity model.
 *
 * @author Harry
 */
@Entity
@Table(name = "currencies", schema = "stock")
public class Currency implements Serializable {

	private static final long serialVersionUID = 2835566812229024757L;

	@JsonIgnore
	@Id
	@Column(name = "currency_id", nullable = false, unique = true)
	private int currencyID;

	@Column(name = "code", nullable = false, unique = true)
	private String code;

	@Column(name = "name", nullable = false)
	private String name;

	/**
	 * Default Constructor.
	 */
	public Currency() {
	}

	/**
	 * Parametrised Constructor
	 * 
	 * @param code
	 *            The currency's 3 digit code.
	 * @param name
	 *            The name of the currency.
	 * @param sign
	 *            The currency's sign used to indicate the code.
	 */
	public Currency(String code, String name, String sign) {
		this.code = code;
		this.name = name;
	}

	/**
	 *
	 * @return The ID of the currency.
	 */
	public int getCurrencyID() {
		return currencyID;
	}

	/**
	 *
	 * @param currencyID
	 *            The ID of the currency.
	 */
	public void setCurrencyID(int currencyID) {
		this.currencyID = currencyID;
	}

	/**
	 *
	 * @return The currency's 3 digit code.
	 */
	public String getCode() {
		return code;
	}

	/**
	 *
	 * @param code
	 *            The currency's 3 digit code.
	 */
	public void setCode(String code) {
		this.code = code;
	}

	/**
	 *
	 * @return The name of the currency.
	 */
	public String getName() {
		return name;
	}

	/**
	 *
	 * @param name
	 *            The name of the currency.
	 */
	public void setName(String name) {
		this.name = name;
	}

}
