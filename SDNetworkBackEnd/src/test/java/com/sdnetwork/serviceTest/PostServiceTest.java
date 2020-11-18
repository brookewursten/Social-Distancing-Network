package com.sdnetwork.serviceTest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runners.MethodSorters;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;

import com.sdnetwork.dto.RestPost;
import com.sdnetwork.model.Post;
import com.sdnetwork.model.User;
import com.sdnetwork.repo.PostDao;
import com.sdnetwork.service.PostService;

@ContextConfiguration(locations = "classpath:applicationContext-test.xml")
@ExtendWith(MockitoExtension.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class PostServiceTest {
	
	PostDao pd = mock(PostDao.class);
	private PostService ps = new PostService(pd);
	static Set<User> likes;
	
	private Post p;
	private RestPost rp1,rp2;
	private List<RestPost> rpl;
	
	@Before
	public void setUp(){
	      likes = new HashSet<User>();
	      likes.add(new User());
	      p=new Post(1,1,"test1",3,new Timestamp(System.currentTimeMillis()),false,"",likes);
	      rp1 = new RestPost("un1","fname1","lname1","test1","",new Date(System.currentTimeMillis()),1,1,false);
	      rp2 = new RestPost("un2","fname2","lname2","test2","",new Date(System.currentTimeMillis()),1,1,false);
	      rpl = new ArrayList<RestPost>();
	      rpl.add(rp1);
	      rpl.add(rp2);
	   }

	@Test
	void testGetAll() {
		when(pd.findAll()).thenReturn(rpl);
		Assert.assertEquals(ps.getAll(),rpl);
	}

	@Test
	void testGetById() {
		when(pd.findByUserId(1)).thenReturn(rpl);
		Assert.assertEquals(ps.getById(1),rpl);
	}

	@Test
	void testCreateNew() {
		when(pd.save(p)).thenReturn(p);
		Assert.assertEquals(ps.createNew(p), p);
	}

}
