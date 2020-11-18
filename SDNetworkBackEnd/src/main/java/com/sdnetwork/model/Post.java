package com.sdnetwork.model;
import java.sql.Timestamp;
import java.util.Set;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="post_id")
	private int postId;
	
	@Column(name="poster_id")
	private int posterId;
	
	@Column(name="post_text")
	private String postText;
	
	@Column(name="number_of_likes")
	private int numLikes;
	
	@Column(name="date_time_posted", nullable=false)
	private Timestamp dateTimePosted;
	
	@Column(name="is_image_post", nullable=false)
	private boolean isImagePost;
	
	@Column(name="image_link")
	private String imageLink;
	
	@ManyToMany(fetch = FetchType.LAZY,mappedBy = "likes")
	private Set<User> likedBy;
	
	public Post() {
		super();
	}


	public Post(int postId, int posterId, String postText, int numLikes, Timestamp dateTimePosted, boolean isImagePost,
			String imageLink, Set<User> likedBy) {
		super();
		this.postId = postId;
		this.posterId = posterId;
		this.postText = postText;
		this.numLikes = numLikes;
		this.dateTimePosted = dateTimePosted;
		this.isImagePost = isImagePost;
		this.imageLink = imageLink;
		this.likedBy = likedBy;
	}

	public int getPostId() {
		return postId;
	}
	
	public void setPostId(int postId) {
		this.postId = postId;
	}
	
	public int getPosterId() {
		return posterId;
	}
	
	public void setPosterId(int posterId) {
		this.posterId = posterId;
	}
	
	public String getPostText() {
		return postText;
	}
	
	public void setPostText(String postText) {
		this.postText = postText;
	}
	
	public int getNumLikes() {
		return numLikes;
	}
	
	public void setNumLikes(int numLikes) {
		this.numLikes = numLikes;
	}
	
	public Timestamp getDateTimePosted() {
		return dateTimePosted;
	}
	
	public void setDateTimePosted(Timestamp dateTimePosted) {
		this.dateTimePosted = dateTimePosted;
	}
	
	public boolean isImagePost() {
		return isImagePost;
	}
	
	public void setImagePost(boolean imagePost) {
		isImagePost = imagePost;
	}
	
	public String getImageLink() {
		return imageLink;
	}
	
	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}
	
	public Set<User> getLikedBy() {
		return likedBy;
	}
	
	public void setLikedBy(Set<User> likedBy) {
		this.likedBy = likedBy;
	}


	@Override
	public String toString() {
		return "Post [postId=" + postId + ", posterId=" + posterId + ", postText=" + postText + ", numLikes=" + numLikes
				+ ", dateTimePosted=" + dateTimePosted + ", isImagePost=" + isImagePost + ", imageLink=" + imageLink
				+ ", likedBy=" + likedBy + "]";
	}

	

	
}
