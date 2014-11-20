package org.villamx.requireoptimizer.rest.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.villamx.requireoptimizer.rest.domain.models.Framework;

import java.util.ArrayList;
import java.util.List;

/**
 * FrameworkController.
 * 
 * @author moises.villa
 * @version 1.0
 * @since 2014-11-18
 */
@Controller
@RequestMapping("/frameworks")
public class FrameworkController {

	private static final Logger log = LoggerFactory.getLogger(FrameworkController.class);

	private List<Framework> frameworks = new ArrayList<Framework>(4);

	/**
	 * In a real application, you'd likely grab that from a service bean. But here
	 * trying to see how the MVC part works.
	 */
	public FrameworkController() {
		log.info("Faking the framework list..");

		frameworks.add(new Framework("AngularJS", "MIT", "1.2.14"));
		frameworks.add(new Framework("Dojo", "BSD, AFL", "1.10"));
		frameworks.add(new Framework("Ember.js", "MIT", "1.7.0"));
		frameworks.add(new Framework("Ext JS", "GPL, Commercial", "4.2"));
	}

	@RequestMapping
	public @ResponseBody
	List<Framework> list() {
		return this.frameworks;
	}

	@RequestMapping("{id}")
	public @ResponseBody
	Framework framework(@PathVariable Integer id) {
		return frameworks.get(id);
	}

}
