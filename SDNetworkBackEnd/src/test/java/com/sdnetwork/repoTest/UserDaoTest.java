package com.sdnetwork.repoTest;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runners.MethodSorters;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.sdnetwork.dto.RestUser;
import com.sdnetwork.model.User;
import com.sdnetwork.repo.UserDao;

@ContextConfiguration(locations = "classpath:applicationContext-test.xml")
@ExtendWith(MockitoExtension.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class UserDaoTest {
	
	private static ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:applicationContext-test.xml");
	
	private UserDao ud = ac.getBean(UserDao.class);

	@Test
	@Transactional
	void testFindAll() {
		List<RestUser> users = ud.findAll();
		System.out.println(users);
		assertEquals(1, users.size());
	}

	@Test
	void testFindById() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdate() {
		fail("Not yet implemented");
	}

	@Test
	void testSave() {
		fail("Not yet implemented");
	}

	@Test
	void testDelete() {
		fail("Not yet implemented");
	}

	@Test
	void testFindByUsername() {
		fail("Not yet implemented");
	}

	@Test
	void testFindByEmail() {
		fail("Not yet implemented");
	}

	@Test
	void testFindBySearch() {
		fail("Not yet implemented");
	}

}
