package com.sdnetwork.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sdnetwork.dto.RestLike;
import com.sdnetwork.service.LikeService;

@Controller
@CrossOrigin
@RequestMapping("/likes")
public class LikeController {
	
	@Autowired
	public LikeController(LikeService ls) {
		super();
		this.ls = ls;
	}
	
	public LikeController() {
		this(new LikeService());
	}

	private LikeService ls;
	
	@PostMapping("/add")
	public @ResponseBody void addLike(@RequestBody RestLike like) {
		System.out.println(like);
		ls.addLike(like);
		
	}
	
	@PostMapping("/remove")
	public @ResponseBody void removeLike(@RequestBody RestLike like) {
		System.out.println(like);
		ls.removeLike(like);
	}

}
