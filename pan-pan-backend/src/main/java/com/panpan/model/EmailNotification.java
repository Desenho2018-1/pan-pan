package com.panpan.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class EmailNotification extends Notification {
	@ManyToOne
    @JoinColumn(name = "user_id")
	private User targetUser;
	private boolean status = false;
	private @Id @GeneratedValue Long notification_id;
	private String longText;
	private String shortText;
	public EmailNotification() {
	
	};
	public EmailNotification(User u, String longText, String shortText) {
		this.setTargetUser(u);
		this.setLongText(longText);
		this.setShortText(shortText);
	}
	@Override
	public String getLongText() {
		return longText;
	}
	
	@Override
	public String getShortText() {
		return shortText;
	}

}
