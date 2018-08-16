package com3014.group3.markit.integration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.messaging.Message;
import org.springframework.messaging.PollableChannel;

import com.rometools.rome.feed.synd.SyndEntry;

import com3014.group3.markit.integration.model.RSS;

/**
 * This class reads the integration feed context from the resource folder, and
 * generate rss contents based on data retrieved from external source
 * 
 * @author Wilson Ching
 */
public class RSSIntegration {

	/**
	 * Get a list of RSS contents
	 * 
	 * @param numOfEntries
	 *            Number of RSS feeds to return
	 * @return A list of RSS contents sorted by dates descendingly
	 */
	public static List<RSS> getRSSFeed(int numOfEntries) {
		List<RSS> entries = new ArrayList<RSS>();
		try {
			ConfigurableApplicationContext ac = new ClassPathXmlApplicationContext(
					"com3014/group3/markit/resource/rss.xml");
			PollableChannel feedChannel = ac.getBean("feedChannel", PollableChannel.class);

			for (int i = 0; i < 50; i++) {
				// 5 seconds timeout period
				@SuppressWarnings("unchecked")
				Message<SyndEntry> message = (Message<SyndEntry>) feedChannel.receive(5000);
				if (message != null) {
					SyndEntry entry = message.getPayload();
					entries.add(new RSS(entry));
				} else {
					break;
				}
			}
			ac.close();
			// Sort the data by created date descendingly
			Collections.sort(entries);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return entries;
	}

}
