package com.sdnetwork.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sdnetwork.dto.RestPost;
import com.sdnetwork.model.Post;
import com.sdnetwork.service.PostService;

@Controller
@CrossOrigin
@RequestMapping("/posts")
public class PostController {
	
	private PostService ps;
	
	@Autowired
	public PostController(PostService ps) {
		super();
		this.ps = ps;
	}
	
	public PostController() {
		this(new PostService());
	}
	

	@GetMapping("/all")
	public @ResponseBody List<RestPost> getAllPosts() {
		return ps.getAll();
		
	}
	

	@GetMapping("/userid/{id}")
	public @ResponseBody List<RestPost> getPostsByUserId(@PathVariable("id") int id){
		return ps.getById(id);
	
	}
	
	@PostMapping("/new")
	public @ResponseBody Post createNewPost(@RequestBody Post p) {
		return ps.createNew(p);
	}
	
	
	
	
	
		

}
