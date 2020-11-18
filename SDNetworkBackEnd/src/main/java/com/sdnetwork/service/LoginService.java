package com.sdnetwork.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.sdnetwork.model.User;
import com.sdnetwork.repo.UserDao;

@Service
public class LoginService {
	
	public UserDao ud;
	
	@Autowired
	public LoginService(UserDao ud) {
		this.ud = ud;
		
	}
	
	public LoginService() {
		this(new UserDao());
	}

	public User getUser(String username, String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		User u = new User();
		
		u = ud.findByUsername(username);
		if(encoder.matches(password,u.getPassword())) {
			u.setPassword(null);
			return u;
		} else {
			return null;
		}
	}

}
