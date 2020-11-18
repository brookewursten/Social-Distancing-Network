package com.sdnetwork.service;

import com.sdnetwork.repo.PostDao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdnetwork.dto.RestPost;
import com.sdnetwork.model.Post;

@Service
public class PostService {
	
	private PostDao pd;
	
	@Autowired
	public PostService(PostDao pd) {
		super();
		this.pd = pd;
	}
	
	public PostService() {
		this(new PostDao());
	}

	public List<RestPost> getAll() {
		List<RestPost> allPosts = getPd().findAll();
		return allPosts;
		
	}
	
	public List<RestPost> getById(int i){
		return getPd().findByUserId(i);
	}

	public Post createNew(Post p) {
		return getPd().save(p);
	}

	public PostDao getPd() {
		return pd;
	}
	


	

}
