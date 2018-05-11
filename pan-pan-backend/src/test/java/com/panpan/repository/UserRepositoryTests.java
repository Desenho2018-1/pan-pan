package com.panpan.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Calendar;

import static org.junit.Assert.assertEquals;

import com.panpan.PanPanApplication;
import com.panpan.model.User;
import com.panpan.repository.UserRepository;
@RunWith(SpringRunner.class)
@SpringBootTest(classes = PanPanApplication.class)
public class UserRepositoryTests {
	@Autowired
	private UserRepository userRepository;
	
	private static String USER_MAIL = "adoniranbaasdrbosa@gmail.com";
	private static String USER_FIRSTNAME = "Adoniran123";
	private static String USER_LASTNAME = "Barbosa12332";

	@Test
	public void givenUserRepositoryCreateUser() {
		User user = new User(USER_FIRSTNAME, USER_MAIL, "password");
		Calendar cal = Calendar.getInstance();
		int daysToIncrement = -5;
		cal.add(Calendar.DATE, daysToIncrement);
		user.setBirthDate(cal.getTime());

		user.setLastName(USER_LASTNAME);
		user.setUserName(USER_FIRSTNAME);
		user.setState("Idk");
		user.setCity("Where palm trees grow");
		user.setActive(true);

		this.userRepository.save(user);
		
		User foundUser = userRepository.findByFirstName(user.getFirstName());
		assertNotNull(foundUser);
		assertEquals(user.getId(), foundUser.getId());
	}

}
