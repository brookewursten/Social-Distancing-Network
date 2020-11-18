package com.sdnetwork.service;

import com.sdnetwork.repo.PostDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdnetwork.dto.RestLike;

@Service
public class LikeService {
	private PostDao pd;
	
	
	
	@Autowired
	public LikeService(PostDao pd) {
		super();
		this.pd = pd;
	}
	
	public LikeService() {
		this(new PostDao());
	}
	
	
	public void addLike(RestLike like) {	
		pd.addLike(like);
	}
	public void removeLike(RestLike like) {
		pd.removeLike(like);
	}

}
