package com.panpan;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.json.JSONException;

import static org.junit.Assert.assertEquals;

import com.panpan.PanPanApplication;
import com.panpan.model.User;
import com.panpan.model.Band;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = PanPanApplication.class, webEnvironment = WebEnvironment.DEFINED_PORT)
public class PanPanApplicationTests {
	@Autowired
	private TestRestTemplate template;

	private static String USER_ENDPOINT = "http://localhost:8080/user/";
	private static String BAND_ENDPOINT = "http://localhost:8080/band/";

	private static String USER_MAIL = "adoniranbarbosa@gmail.com";
	private static String BAND_NAME = "Demônios da Garoa";
	private static String BAND_GENRE = "Forró";

	@Test
	public void whenSaveBandWIthOneMember_thenCorrect() {
	    User user = new User(this.USER_MAIL, "password");
	    template.postForEntity(this.USER_ENDPOINT, user, User.class);

	    Band band = new Band(this.BAND_NAME, this.BAND_GENRE);
	    template.postForEntity(this.BAND_ENDPOINT, band, Band.class);

	    HttpHeaders requestHeaders = new HttpHeaders();
	    requestHeaders.add("Content-Type", "text/uri-list");
	    HttpEntity<String> bandHttpEntity
	      = new HttpEntity<>(BAND_ENDPOINT + "/1", requestHeaders);
	    template.exchange(USER_ENDPOINT + "/1/band",
	      HttpMethod.PUT, bandHttpEntity, String.class);

	    ResponseEntity<Band> bandGetResponse =
	      template.getForEntity(USER_ENDPOINT + "/1/band", Band.class);
	    assertEquals("band is incorrect",
	      bandGetResponse.getBody().getName(), this.BAND_NAME);
	}

}
