package com.sdnetwork.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sdnetwork.model.User;
import com.sdnetwork.service.LoginService;

@Controller
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	/**
	 * 
	 */

	public LoginService ss;
	
	@Autowired
	public LoginController(LoginService ss) {
		super();
		this.ss = ss;
	}

	public LoginController() {
		this(new LoginService());
	}


	@PostMapping
	public @ResponseBody User login(@RequestBody Map<String, String> params) {
		String username = params.get("username");
		String password = params.get("password");
		return ss.getUser(username, password);

	}
	

	
	 
	
	
	

}