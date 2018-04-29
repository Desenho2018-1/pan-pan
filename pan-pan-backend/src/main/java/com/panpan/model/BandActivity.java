package com.panpan.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import org.springframework.beans.factory.annotation.Autowired;

import com.panpan.Observer;
import com.panpan.repository.NotificationRepository;

import lombok.Data;

@Data
@Entity
public class BandActivity {
	@OneToMany(targetEntity=User.class)
	List<Observer> observers = new ArrayList<Observer>();
	
	@OneToMany(mappedBy="band", cascade=CascadeType.ALL)
	List<Notification> notifications = new ArrayList<Notification>();
	private @Id @GeneratedValue Long id;
	

	public BandActivity() {
		
	}
	public void addObserver(Observer o) {
		observers.add(o);
	}
	public void removeObserver(Observer o) {
		observers.remove(o);
	}
	public void notifyObservers(Notification n) {
		for(Observer o:observers) {
			o.update(n);
		}
	}
	public Notification createNotification(User creator, String text, String url) {
		return new Notification(this,creator, text, url);
	}
	
	public void addNotification(Notification n) {
		notifications.add(n);
		notifyObservers(n);
	}
}
