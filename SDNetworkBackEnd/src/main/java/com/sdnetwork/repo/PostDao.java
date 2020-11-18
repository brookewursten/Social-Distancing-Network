package com.sdnetwork.repo;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.TypedQuery;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sdnetwork.dto.RestLike;
import com.sdnetwork.dto.RestPost;
import com.sdnetwork.model.*;


@Repository
@Transactional
public class PostDao{
	
	SessionFactory sessF;
	
	private final String baseString = "select new com.sdnetwork.dto.RestPost("
			+ "u.username, u.firstName, u.lastName, p.postText, p.imageLink, p.dateTimePosted, p.numLikes, p.postId, p.isImagePost)"
			+ "from Post p join User u on "
			+ "p.posterId = u.userId ";
	
	public PostDao() {
		super();
	}
	
	@Autowired
	public PostDao(SessionFactory sess) {
		super();
		this.sessF = sess;
	}


	public List<RestPost> findAll() {
//		return sessF.openSession().createNativeQuery("select * from post", Post.class).list();
		Session sess = sessF.getCurrentSession();
		TypedQuery<RestPost> q = sess.createQuery(baseString,RestPost.class);
		List<RestPost> p = q.getResultList();
		return p;

	}


	public RestPost findById(Integer i) {
		Session sess = sessF.getCurrentSession();
		TypedQuery<RestPost> q = sess.createQuery(baseString + "where postId = " + i + "", RestPost.class);
		RestPost p = q.getSingleResult();
		return p;
	}


	public Post update(Post p) {
		Session sess = sessF.getCurrentSession();
		sess.update(p);
		return p;
	}


	public Post save(Post p) {
		Timestamp now = new Timestamp(System.currentTimeMillis());
		p.setDateTimePosted(now);
		Session sess = sessF.getCurrentSession();
		System.out.println(p);
		sess.persist(p);
		return p;
	}


	public Post delete(Integer i) {
		Session sess = sessF.getCurrentSession();
		Post p = new Post();
		p.setPostId(i);
		sess.delete(p);
		return p;
	}
	
	public List<RestPost> findByUserId(int userId) {
		try {
		//return sessF.getCurrentSession().createQuery("from Post where user_id = "+userId, Post.class).list();
		Session sess = sessF.getCurrentSession();
		TypedQuery<RestPost> q = sess.createQuery(baseString + "where poster_id =" + userId + "",RestPost.class);
		List<RestPost> p = q.getResultList();
		return p;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public void addLike(RestLike like) {
		Session sess = sessF.getCurrentSession();
		try {
		sess.createNativeQuery("insert into likes values (" + Integer.toString(like.getPostId()) +", "+ Integer.toString(like.getUserId()) + ")").executeUpdate();
		sess.createNativeQuery("update post set number_of_likes=number_of_likes+1 where post_id="+ like.getPostId()).executeUpdate();
		} catch (Exception e) {
			
		}
	}
	public void removeLike(RestLike like) {
		Session sess = sessF.getCurrentSession();
		try {
		sess.createNativeQuery("delete from likes where post_id = " + Integer.toString(like.getPostId()) +" and user_id = "+ Integer.toString(like.getUserId())).executeUpdate();	
		sess.createNativeQuery("update post set number_of_likes=number_of_likes-1 where post_id="+ like.getPostId()).executeUpdate();
		} catch (Exception e) {
			
		}
	}


}
