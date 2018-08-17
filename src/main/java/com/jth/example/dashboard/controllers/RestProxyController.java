package com.jth.example.dashboard.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jth.example.dashboard.service.RestProxyService;

@CrossOrigin
@RestController
@RequestMapping(value={"/entities", "/services"})
public class RestProxyController {

	@Autowired
	RestProxyService restProxyService;

	@RequestMapping(value="/**", method = RequestMethod.GET)
	@ResponseBody public String restProxyGet(HttpServletRequest request) {
		String restUrlPath = getRestUrl(request);
		return restProxyService.get(restUrlPath);
	}

	@RequestMapping(value="/**", method = RequestMethod.POST)
	 @ResponseBody public String restProxyPost(@RequestBody String body, HttpServletRequest request) {
		String restUrlPath = getRestUrl(request);
	    return restProxyService.post(restUrlPath, body);
	}

	private String getRestUrl(HttpServletRequest request) {
		String requestURI = request.getRequestURI() + "?" + request.getQueryString();
		String restUrlPath;
		if(requestURI.contains("/entities")) {
			restUrlPath = requestURI.substring(requestURI.indexOf("/entities") + 9);
		} else {
			restUrlPath = requestURI.substring(requestURI.indexOf("/services") + 9);
		}
			
		return restUrlPath;
	}
	
}
