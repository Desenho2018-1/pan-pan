package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.panpan.model.Notification;
import com.panpan.repository.NotificationRepository;

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
