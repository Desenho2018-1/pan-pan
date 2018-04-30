package com.panpan.handler;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.panpan.model.Band;
import com.panpan.model.Notification;
import com.panpan.model.User;
import com.panpan.repository.NotificationRepository;

@Component
@RepositoryEventHandler(Band.class)
public class BandEventHandler {

	@Autowired
	private NotificationRepository rep;

	@HandleAfterCreate
	public void handleBandSave(Band band) {
		User user1 = new User("NOTIFICADO", "NOFITY@hotmail.com");
		band.addObserver(user1);
		ArrayList<Notification> notifications = band.createNotification(user1, "AAA", "uashusdadsdsaadsh");
		for(Notification n:notifications) {			
			rep.save(n);
		}
	}

}
