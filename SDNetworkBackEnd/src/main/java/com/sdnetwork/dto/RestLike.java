package com.sdnetwork.dto;

public class RestLike {
	
	private int userId;
	private int postId;
	
	
	public RestLike() {
		super();
	}


	public RestLike(int userId, int postId) {
		super();
		this.userId = userId;
		this.postId = postId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public int getPostId() {
		return postId;
	}


	public void setPostId(int postId) {
		this.postId = postId;
	}


	@Override
	public String toString() {
		return "RestLike [userId=" + userId + ", postId=" + postId + "]";
	}
	
	
	
	

}
