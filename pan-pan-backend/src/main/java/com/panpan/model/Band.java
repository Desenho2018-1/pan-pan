package com.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.ManyToMany;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.validation.constraints.*;
import java.util.Date;
import lombok.Data;

import com.panpan.Observer;
import com.panpan.model.User;

@Data
@Entity
public class Band {
	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(targetEntity = User.class)
	List<Observer> observers = new ArrayList<Observer>();

	@OneToMany(mappedBy = "band", cascade = CascadeType.ALL)
	List<Notification> notifications = new ArrayList<Notification>();

	@NotNull
	@OneToMany(mappedBy = "band")
	private List<User> members;

	@NotNull
	@Size(min = 2, max = 50)
	private String genre;

	@NotNull
	private Date creationDate;

	@NotNull
	@Size(min = 2, max = 50)
	private String name;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "band_music", joinColumns = @JoinColumn(name = "song_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "band_id", referencedColumnName = "id"))
	private List<SongComponent> songs;

	public Band() {
	}

	public Band(User u, String name, String genre) {
		ArrayList<User> members = new ArrayList<User>();
		members.add(u);
		addObserver(u);
		setMembers(members);
		setName(name);
		setGenre(genre);
		setCreationDate(new Date());
	}

	public void addObserver(Observer o) {
		boolean flag = true;
		for (Observer observer : observers) {
			if(o.getId() == observer.getId()) {
				flag = false;
			}
		}
		if(flag) {
			observers.add(o);
		}
	}

	public void removeObserver(Observer o) {
		observers.remove(o);
	}

	public ArrayList<Notification> notifyObservers(Notification n) {
		ArrayList<Notification> notifications = new ArrayList<Notification>();
		for (Observer o : observers) {
			notifications.add(o.update(n));
		}
		return notifications;
	}

	public ArrayList<Notification> createNotification(User creator, String text, String url) {
		Notification n = new Notification(this, creator, text, url);
		notifications.add(n);

		ArrayList<Notification> newNotifications = notifyObservers(n);
		newNotifications.add(n);

		return newNotifications;
	}

}
