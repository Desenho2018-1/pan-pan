package com.panpan;

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
import com.panpan.model.VerificationToken;
import com.panpan.repository.UserRepository;
import com.panpan.repository.VerificationTokenRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=PanPanApplication.class)
public class PanPanApplicationTests {
	  @Autowired
	  private UserRepository userRepository;

		@Autowired
		private VerificationTokenRepository verificationTokenRepository;

    private static String USER_MAIL = "adoniranbarbosa@gmail.com";
    private static String USER_FIRSTNAME = "Adoniran";
		private static String USER_LASTNAME = "Barbosa";
		
    @Test
    public void givenUserRepositoryWhenSaveAndRetreiveUserThenOK() {
			  User user = new User(USER_FIRSTNAME, USER_MAIL, "password");
			  Calendar cal = Calendar.getInstance();
			  int daysToIncrement = -5;
			  cal.add(Calendar.DATE, daysToIncrement);
			  user.setBirthDate(cal.getTime());

			  user.setLastName(USER_LASTNAME);
			  user.setUserName( USER_FIRSTNAME);
			  user.setState("Idk");
			  user.setCity("Where palm trees grow");
				user.setActive(true);

        this.userRepository.save(user);
				this.verificationTokenRepository.save(new VerificationToken(user));

        User foundUser = userRepository.findByFirstName(user.getFirstName());
        assertNotNull(foundUser);
        assertEquals(user.getId(), foundUser.getId());
		}

}
