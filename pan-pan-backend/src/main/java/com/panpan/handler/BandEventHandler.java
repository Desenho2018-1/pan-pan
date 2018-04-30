package com.panpan.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.panpan.controller.NotificationController;
import com.panpan.model.Band;
import com.panpan.model.BandActivity;
import com.panpan.model.Notification;
import com.panpan.model.User;

@Component
@RepositoryEventHandler(Band.class)
public class BandEventHandler {

	@Autowired
	private NotificationController controller;

	@HandleAfterCreate
	public void handleBandSave(Band band) {
		User user1 = new User("NOTIFICADO", "NOFITY@hotmail.com");
		BandActivity ba = band.getActivity();
		Notification n = ba.createNotification(user1, "AAA", "uashusdadsdsaadsh");
		controller.createNotificationForBand(n);
	}

}
