package com.sdnetwork.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.sdnetwork.dto.RestUser;
import com.sdnetwork.email.Email;
import com.sdnetwork.model.User;
import com.sdnetwork.repo.UserDao;

import java.util.List;

@Service
public class UserService {

	UserDao ud;

	@Autowired
	public UserService(UserDao ud) {
		super();
		this.ud = ud;
	}

	public UserService() {
		super();
	}

	public User createUser(User user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		user.setPassword(encoder.encode(user.getPassword()));
		user = ud.save(user);
		if (user != null) {
			user.setPassword(null);
		}
		return user;
	}

	public User updateUser(User user) {
		User u = ud.findById(user.getUserId());
		user.setPassword(u.getPassword());
		user.setPosts(u.getPosts());
		ud.update(user);
		return user;
	}

	public User getUserByUsername(String username) {
		User user= ud.findByUsername(username);
		user.setPassword(null);
		return user;
	}



	public User changePass(String email) throws Exception {
		 @SuppressWarnings("deprecation")
		String email2 = java.net.URLDecoder.decode(email);
		email2 = email2.replaceAll("=", "");
		User user= ud.findByEmail(email2);
		long rando = (long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L;
		String tempPass = String.valueOf(rando);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		user.setPassword(encoder.encode(tempPass));
		user = ud.update(user);
		Email emailObj = new Email(email2);
		emailObj.appendPass(tempPass);
		emailObj.send();
		user.getPassword();
		return user;
	}
	
	public User changePassSettings(User user) throws Exception {
		User use2 = ud.findByEmail(user.getEmail());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		use2.setPassword(encoder.encode(user.getPassword()));
		use2 = ud.update(use2);
		return use2;
	}
	
	public User findByEmail(String email) {
		return ud.findByEmail(email);
	}
	
	public List<RestUser> getAllUsers() {
		return ud.findAll();
	}
	
	public List<User> findBySearch(String search) {
		String search2 = search.replaceAll("=", "");
		//User user = ud.findBySearch(search2).get(0);
		// System.out.println(user.toString());
		return ud.findBySearch(search2);
	}
	
}
