package com3014.group3.markit.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

/**
 * Spring MVC config
 * 
 * @author Harry Childs
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "com3014.group3.markit.service", "com3014.group3.markit.configuration" })
public class AppConfig extends WebMvcConfigurerAdapter {

	/**
	 * JSP resolver for the front-end
	 * 
	 * @return The view resolver.
	 */
	@Bean
	public ViewResolver viewResolver() {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setViewClass(JstlView.class);
		viewResolver.setPrefix("/WEB-INF/");
		viewResolver.setSuffix(".jsp");
		viewResolver.setCache(false);
		return viewResolver;
	}

	/**
	 * Redirect base path to required view.
	 */
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
	}

	/**
	 * Add a handler for all non-JSP assets (Such as javascript, css and img).
	 */
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		CacheControl cacheControl = CacheControl.noCache().mustRevalidate().cachePublic();
		registry.addResourceHandler("/assets/**").addResourceLocations("/WEB-INF/assets/")
				.setCacheControl(cacheControl);
	}

	/**
	 * Configure the application to use JSON.
	 */
	@Override
	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
		// Set content type resolution to JSON.
		configurer.mediaType("json", MediaType.APPLICATION_JSON);
	}
}