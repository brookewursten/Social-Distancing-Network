package com.sdnetwork.repo;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.sdnetwork.dto.RestUser;
import com.sdnetwork.model.User;

@Repository
@Transactional
@DynamicUpdate
public class UserDao  {
	
	SessionFactory sessF;
	private final String baseString = "select new com.sdnetwork.dto.RestUser( u.userId, u.username, u.email, u.firstName, u.lastName, u.pfpLink) from User u";

	public UserDao() {
		super();
	}
	
	@Autowired
	public UserDao(SessionFactory sessF) {
		this.sessF = sessF;
	}


	public List<RestUser> findAll() {
		Session sess = sessF.openSession();
		TypedQuery<RestUser> q = sess.createQuery(baseString, RestUser.class);
		List<RestUser> p = q.getResultList();
		return p;
	}

	public User findById(Integer i) {
		User user = sessF.openSession()
				.createQuery("from User where user_id = "+ i +"", User.class).list().get(0);
		return user;
	}


	public User update(User t) {
		Session sess = sessF.getCurrentSession();
		sess.merge(t);
		t.setLikes(null);
		t.setPosts(null);
		return t;
	}


	public User save(User t) {
		Session sess= sessF.openSession();
		try{sess.save(t);
		return t;
		} catch (Exception e) {
			return null;
		}
	}


	public User delete(Integer i) {

		Session sess = sessF.getCurrentSession();
		User u = sess.get(User.class, i);
		sess.delete(u);
		
		return u;
	}
	
	
	public User findByUsername(String username) {
		try {
		User user = sessF.openSession().createQuery("from User where username = '"+username+"'", User.class).list().get(0);
		user.setLikes(null);
		user.setPosts(null);
		return user;
		} catch (Exception e) {
			return null;
		}
	}
	
	public User findByEmail(String email) {
		try {
		User user = sessF.openSession().createQuery("from User where email = '"+email+"'", User.class).list().get(0);
		user.setLikes(null);
		return user;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<User>  findBySearch(String search) {
		try {
		List<User> li = sessF.openSession().createQuery("from User where last_name = '" + search + "'", User.class).list();
		for(int i = 0; i < li.size(); i++)
		{
			li.get(i).setLikes(null);
			li.get(i).setPosts(null);
		}
		return li;
		} catch (Exception e) {
			return null;
		}
	}
	

}
