package com3014.group3.markit.integration.model;

import java.util.Date;

import com.rometools.rome.feed.synd.SyndEntry;

/**
 * RSS data model used for Jackson parsing
 * 
 * @author Wilson Ching
 */
public class RSS implements Comparable<RSS> {
	private String uri;
	private String title;
	private String description;
	private String creator;
	private Date createdDate;
	private String link;

	/**
	 * RSS Constructor
	 * 
	 * @param entry
	 *            RSS integration feed data entry
	 */
	public RSS(SyndEntry entry) {
		this.creator = entry.getAuthor();
		this.uri = entry.getUri();
		this.title = entry.getTitle();
		this.link = entry.getLink();
		this.createdDate = entry.getPublishedDate();
		this.description = entry.getDescription().getValue();
	}

	/**
	 * 
	 * @return The uri of a RSS content
	 */
	public String getUri() {
		return uri;
	}

	/**
	 * 
	 * @return The title of a RSS content
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * 
	 * @return The description of a RSS content
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * 
	 * @return The created of a RSS content
	 */
	public String getCreator() {
		return creator;
	}

	/**
	 * 
	 * @return The created date of a RSS content
	 */
	public Date getCreatedDate() {
		return createdDate;
	}

	/**
	 * 
	 * @return The external url of a RSS content
	 */
	public String getLink() {
		return link;
	}

	/**
	 * Sort the RSS feed by created date descendingly
	 */
	@Override
	public int compareTo(RSS o) {
		return o.getCreatedDate().compareTo(this.getCreatedDate());
	}
}
