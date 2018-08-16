package com3014.group3.markit.error;

/**
 * Incorrect input by the client
 * 
 * @author Harry
 */
public final class FieldNotValidException extends RuntimeException {

	private static final long serialVersionUID = 4764619250758741697L;

	public FieldNotValidException() {
		super();
	}

	public FieldNotValidException(final String message) {
		super(message);
	}

	public FieldNotValidException(final Throwable cause) {
		super(cause);
	}

	public FieldNotValidException(final String message, final Throwable cause) {
		super(message, cause);
	}
}
