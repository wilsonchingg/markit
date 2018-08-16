package com3014.group3.markit.error;

/**
 * Exception when the client's email input exists in the database
 * 
 * @author Harry
 */
public final class UserAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 525417139195240214L;

	public UserAlreadyExistsException() {
		super();
	}

	public UserAlreadyExistsException(final String message) {
		super(message);
	}

	public UserAlreadyExistsException(final Throwable cause) {
		super(cause);
	}

	public UserAlreadyExistsException(final String message, final Throwable cause) {
		super(message, cause);
	}
}
