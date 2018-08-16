package com3014.group3.markit.error;

/**
 * Exception when a user tries to favourite a market twice
 * 
 * @author Harry
 */
public final class AlreadyFavouritedException extends RuntimeException {

	private static final long serialVersionUID = 1122174488901299527L;

	public AlreadyFavouritedException() {
		super();
	}

	public AlreadyFavouritedException(final String message) {
		super(message);
	}

	public AlreadyFavouritedException(final Throwable cause) {
		super(cause);
	}

	public AlreadyFavouritedException(final String message, final Throwable cause) {
		super(message, cause);
	}
}
