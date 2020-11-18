package com.sdnetwork.dto;

import java.util.Date;

public class RestPost {

	private String username;
	private String firstName;
	private String lastName;
	private String postText;
	private String imageLink;
	private Date dateTimePosted;
	private int numLikes;
	private int postId;
	private boolean isImagePost;
	
	
	
	public RestPost(String username, String firstName, String lastName, String postText, String imageLink,
			Date dateTimePosted, int numLikes, int postId, boolean isImagePost) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.postText = postText;
		this.imageLink = imageLink;
		this.dateTimePosted = dateTimePosted;
		this.numLikes = numLikes;
		this.postId = postId;
		this.isImagePost = isImagePost;
	}
	public RestPost() {
		super();
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPostText() {
		return postText;
	}
	public void setPostText(String postText) {
		this.postText = postText;
	}
	public String getImageLink() {
		return imageLink;
	}
	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}
	public Date getDateTimePosted() {
		return dateTimePosted;
	}
	public void setDateTimePosted(Date dateTimePosted) {
		this.dateTimePosted = dateTimePosted;
	}
	public int getNumberLikes() {
		return numLikes;
	}
	public void setNumberLikes(int numberLikes) {
		this.numLikes = numberLikes;
	}
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public boolean isImagePost() {
		return isImagePost;
	}
	public void setImagePost(boolean isImagePost) {
		this.isImagePost = isImagePost;
	}
	@Override
	public String toString() {
		return "RestPost [username=" + username + ", firstName=" + firstName + ", lastName=" + lastName + ", postText="
				+ postText + ", imageLink=" + imageLink + ", dateTimePosted=" + dateTimePosted + ", numberLikes="
				+ numLikes + ", postId=" + postId + ", isImagePost=" + isImagePost + "]";
	}

	

}
