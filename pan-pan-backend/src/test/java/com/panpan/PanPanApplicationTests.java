package com.panpan;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.assertEquals;


import com.panpan.PanPanApplication;
import com.panpan.model.User;
import com.panpan.model.Band;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = PanPanApplication.class, webEnvironment = WebEnvironment.DEFINED_PORT)
public class PanPanApplicationTests {
	@Autowired
	private TestRestTemplate template;

	private static String USER_ENDPOINT = "http://localhost:8080/api/users/";
	private static String BAND_ENDPOINT = "http://localhost:8080/api/bands/";

	private static String USER_MAIL = "adoniranbarbosa@gmail.com";
	private static String BAND_NAME = "Demônios da Garoa";
	private static String BAND_GENRE = "Death Eletrofunk Melódico Gospel";
	@Test
	public void whenSaveBandWithOneMemberThenCorrect() {
	    User user = new User(USER_MAIL, "password");
	    template.postForEntity(USER_ENDPOINT, user, User.class);

	    Band band = new Band(BAND_NAME, BAND_GENRE);
	    template.postForEntity(BAND_ENDPOINT, band, Band.class);

	    HttpHeaders requestHeaders = new HttpHeaders();
	    requestHeaders.add("Content-Type", "text/uri-list");
	    HttpEntity<String> bandHttpEntity
	      = new HttpEntity<>(BAND_ENDPOINT + "/1", requestHeaders);
	    template.exchange(USER_ENDPOINT + "/1/band",
	      HttpMethod.PUT, bandHttpEntity, String.class);

	    ResponseEntity<Band> bandGetResponse =
	      template.getForEntity(USER_ENDPOINT + "/1/band", Band.class);
	    assertEquals("band is incorrect",
	      bandGetResponse.getBody().getName(), BAND_NAME);
	}

}
