package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.panpan.model.Notification;
import com.panpan.repository.NotificationRepository;

@Controller
public class NotificationController {
	@Autowired
	private NotificationRepository repository;

	public void createNotificationForBand(Notification n) {
		repository.save(n);
		n.getBand().addNotification(n);
	}
	public Notification createNotificationForUser(Notification n) {
		repository.save(n);
		return n;
	}
}
