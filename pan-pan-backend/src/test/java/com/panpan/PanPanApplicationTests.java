package com.panpan;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import java.util.Calendar;
import static org.junit.Assert.assertEquals;


import com.panpan.PanPanApplication;
import com.panpan.model.User;
import com.panpan.model.Band;
import com.panpan.repository.BandRepository;
import com.panpan.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class PanPanApplicationTests {
	  @Autowired
	  private UserRepository userRepository;

    private static String USER_MAIL = "adoniranbarbosa@gmail.com";
    private static String USER_NAME = "User";
	  private static String BAND_NAME = "Demônios da Garoa";
	  private static String BAND_GENRE = "Death Eletrofunk Melódico Gospel";


    @Test
    public void givenUserRepository_whenSaveAndRetreiveUser_thenOK() {
			  User user = new User(USER_NAME, USER_MAIL, "password");
			  Calendar cal = Calendar.getInstance();
			  int daysToIncrement = -5;
			  cal.add(Calendar.DATE, daysToIncrement);
			  user.setBirthDate(cal.getTime());

			  user.setLastName("Baggins");
			  user.setUserName("frodo1");
			  user.setState("Idk");
			  user.setCity("Where palm trees grow");
        userRepository.save(user);

        User foundUser = userRepository.findByFirstName(user.getFirstName());
        assertNotNull(foundUser);
        assertEquals(user.getId(), foundUser.getId());
		}

}
