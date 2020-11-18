package com.sdnetwork.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sdnetwork.dto.RestUser;
import com.sdnetwork.model.User;
import com.sdnetwork.service.UserService;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
	UserService us;

	@Autowired
	public UserController(UserService us) {
		super();
		this.us = us;
	}

	public UserController() {
		super();
	}
	
	@PostMapping("/new-user")
	public @ResponseBody User createUser(@RequestBody User user) {
		return us.createUser(user);
	}
	
	@PostMapping("/update")
	public @ResponseBody User updateUser(@RequestBody User user) {
		return us.updateUser(user);
	}
	
	@GetMapping("/{username}")
	public @ResponseBody User getUserByUserName(@PathVariable(value="username") String username) {
		return us.getUserByUsername(username);
	}
	

	@PostMapping("/forgot")
	public @ResponseBody User changePassword(@RequestBody String email) throws Exception {
		return us.changePass(email);
	}
	
	@PostMapping("/changepass")
	public @ResponseBody User changePasswordSettings(@RequestBody User user) throws Exception {
		return us.changePassSettings(user);
	}
	
	@GetMapping("/all")
	public @ResponseBody List<RestUser> getAllUsers() {
		return us.getAllUsers();
	}
	
	@PostMapping("/search")
	public @ResponseBody List<User> searchUsers(@RequestBody String search) {
		return us.findBySearch(search);
	}

}
