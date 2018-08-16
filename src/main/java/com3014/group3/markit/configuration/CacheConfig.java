package com3014.group3.markit.configuration;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.guava.GuavaCache;
import org.springframework.cache.guava.GuavaCacheManager;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.cache.CacheBuilder;

import com3014.group3.markit.integration.YahooIntegration;

/**
 * Cache Configuration file
 * 
 * @author Wilson Ching
 */
@Configuration
@EnableCaching
public class CacheConfig extends CachingConfigurerSupport {
	public final static String YAHOO_CACHE = "yahoo";
	public final static String RSS_CACHE = "rss";
	public final static String HISTORIC_CACHE = "intrinio";

	/**
	 * A SimpleCacheManager for lazy caching
	 * 
	 * @return A CacheManager which contains multiple cache instances
	 */
	@Bean
	@Override
	public CacheManager cacheManager() {
		SimpleCacheManager cacheManager = new SimpleCacheManager();
		GuavaCache rssCache = new GuavaCache(RSS_CACHE,
				CacheBuilder.newBuilder().maximumSize(100).expireAfterWrite(1, TimeUnit.MINUTES).build());
		GuavaCache historicCache = new GuavaCache(HISTORIC_CACHE,
				CacheBuilder.newBuilder().maximumSize(100).expireAfterWrite(1, TimeUnit.HOURS).build());
		cacheManager.setCaches(Arrays.asList(rssCache, historicCache));
		return cacheManager;
	}

	/**
	 * A GuavaCacheManager for Yahoo finance API caching It offers more
	 * customisability than SimpleCacheManager
	 * 
	 * @return A CacheManager which contains a single cache instance
	 */
	@Bean
	public CacheManager guavaCacheManager() {
		GuavaCacheManager cacheManager = new GuavaCacheManager(YAHOO_CACHE);
		cacheManager.setCacheLoader(YahooIntegration.getCacheLoader());
		cacheManager.setCacheBuilder(CacheBuilder.newBuilder().maximumSize(100).refreshAfterWrite(5, TimeUnit.SECONDS));
		return cacheManager;

	}
}