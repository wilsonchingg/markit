package com3014.group3.markit.util;

/**
 * @author Wilson Ching When returning an error to the front page, the message
 *         should be wrapped in a json, This is done by putting the message to a
 *         class
 */
public class GenericResponseEntityWrapper {
	private String message;

	/**
	 * Parameterized Constructor
	 * 
	 * @param message
	 *            message to be sent to the client
	 */
	public GenericResponseEntityWrapper(String message) {
		super();
		this.message = message;
	}

	/**
	 * 
	 * @return message to be sent to the client
	 */
	public String getMessage() {
		return message;
	}
}
