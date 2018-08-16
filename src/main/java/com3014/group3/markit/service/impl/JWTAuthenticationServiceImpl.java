package com3014.group3.markit.service.impl;

import java.util.Date;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * Perform basic JWT encryption and decryption
 * 
 * @author Wilson Ching
 *
 */
public class JWTAuthenticationServiceImpl extends UsernamePasswordAuthenticationFilter {

	public static final long EXPIRATIONTIME = 86400000; // 1 days
	public static final String SECRET = "MIICXQIBAAKBgQCbuRqB6OMRiAAyzrBk3/T+7fvLdB46kitq0MNUFzUc3SvKwX2TNZ9xHiWPRzCNIG/Bvo0cHFHeAn9c4Kv9repKbSsKxTORF/4TYSQzKXaNy7JIQdUgULgNJOxdhhiLNiW8jwIw2akc3HaCQhEWA6ffY5yyY9+5iRG9cdsEFUx9ywIDAQABAoGAVWNKhbGN0S8h7LopPycO0DrutsEVUkiURh3y/Uk8dndQa/1tPitJIl3FeqsulDQVE8fI2IEu4u27qNIJfTDAJu5AhBZdkCC28dfiVTyj47ky8qonZjlp+HEacw2ac0cykuV8013WzEB8MLOd+XeGerMeeAIbppsZytsh4bjs4QECQQD9XTbW7u4EQ0AKDVAWSjmdK5rQw/pFyrnJ/DOlFjAX6E7PEeOUyq3hy7fRnAAvd94OQ5paIpC63ArL8JkX5AZfAkEAnVfXakRc4J2+CMFO6F2Q1w46zEspdNA/VGuwUYaRIhLXlIOdjJqoQmonymW3+9pj26plimWPdCmSz/9pqLsIFQJBANIxXOefPPNoX153gPOdDIMpw7xieeUgtFWv16Cj8a5D2e3MJ4QvSWZDvfI1e6nlxeELkKgqeOus1YAv0LKTR/0CQAGkZQ8q331IqC8XNWefcl+MOnjfX/NkKQUMiq6PJPyiDbXzGbXZ91+aFAg8v4rVYK1uPdkP7ktcE7gwBj5IlXECQQCMUyqDeD4NjYzWmuXOv1xz3B8mPF45/CPG8m2LO+BBqiaJeHNqYEf4TCQcCmHftCe7JYkoK44AJeH1rmjP1BXf";

	/**
	 * Sign a user id using HS512 algorithm, set the expiration data of the jwt
	 * token to 1 day
	 * 
	 * @param userId
	 *            the user id to be signed
	 * @return a jwt token
	 */
	public static String getJWTToken(String userId) {
		String jwt = Jwts.builder().setSubject(userId)
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
				.signWith(SignatureAlgorithm.HS512, SECRET).compact();
		return jwt;
	}

	/**
	 * Convert the jwt token to a userid
	 * 
	 * @param token
	 *            jwt token
	 * @return null if token is invalid or has expired, a user id otherise
	 */
	public static String getUserId(String token) {
		if (token == null)
			return null;
		try {
			Claims claim = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace("Bearer", "")).getBody();
			if (claim.getExpiration().after(new Date())) {
				return claim.getSubject();
			}
			return null;
		} catch (Exception e) {
			// If the jwt token is invalid
			return null;
		}
	}
}
