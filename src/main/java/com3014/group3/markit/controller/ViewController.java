package com3014.group3.markit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Handles page views.
 * 
 * @author Wilson Ching
 */
@Controller
public class ViewController {
	/**
	 * At the front end there are multiple routes that a user could visit. As the
	 * front-end (Angular 5) and back-end are both hosted from Spring, Spring needs
	 * to register all the routes used by the front-end router or otherwise when a
	 * user refreshes from a non-home page, Spring will split out an error
	 * Alternatively, it is possible to host the front-end and back-end in separate
	 * servers so the Spring server doesn't have any knowledge about the front-end
	 * (might even be a better practise), but this approach is easier to run the
	 * application (thus, a better approach for this coursework).
	 * 
	 * @return An index JSP page.
	 */
	@RequestMapping(value = { "/", "/login", "/register", "/confirmUser", "/user/setting", "/markets",
			"/historicCurrent/*", "/dashboard" }, method = RequestMethod.GET)
	public String viewHome() {
		return "index";
	}
}
