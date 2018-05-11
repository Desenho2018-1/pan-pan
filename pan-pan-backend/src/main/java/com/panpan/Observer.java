package com.panpan;

import com.panpan.model.Notification;

public interface Observer {
	public Notification update(Notification notification);
	public Long getId();
}
