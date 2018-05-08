package com.panpan.handler;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.panpan.Observer;
import com.panpan.model.Band;
import com.panpan.model.Notification;
import com.panpan.model.User;
import com.panpan.repository.NotificationRepository;
import com.panpan.repository.UserRepository;

@Component
@RepositoryEventHandler(Band.class)
public class BandEventHandler {
	private final String BASE_URL = "http://localhost:8080/api/bands/";
	@Autowired
	private NotificationRepository rep;
	@Autowired
	private UserRepository userRep;
	
	@HandleBeforeCreate
	public void beforeCreate(Band band) {
		User creator = (User) band.getMembers().toArray()[0];
		band.addObserver(creator);
	}

	@HandleAfterCreate
	public void handleBandSave(Band band) {
		User creator = (User) band.getMembers().toArray()[0];
		ArrayList<Notification> notifications = band.createNotification(creator,
				creator.getUserName() + " criou a banda " + band.getName() + "!", BASE_URL + band.getId());
		for (Notification n : notifications) {
			rep.save(n);
		}
		creator.setBand(band);
		userRep.save(creator);
	}

}
