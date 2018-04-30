package com.panpan.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import com.panpan.Observer;
import com.panpan.controller.NotificationController;
import com.panpan.model.Band;

@Data
@Entity
public class User implements Observer {

	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private String username;
	private Date birthdate;
	private String email;
	private String password;
	private String state;
	private String city;
	private String role;
	private ArrayList<String> instruments;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
	private List<Notification> notifications = new ArrayList<Notification>();

	@ManyToOne
	@JoinColumn(name = "band_id")
	private Band band;

	@JsonProperty
	private Boolean active;

	public User() {
		active = (Boolean.FALSE);
		role = (("User"));
	}

	public User(String name, String email) {
		this.setFirstName(name);
		this.setEmail((email));
	}

	public User(String name, String email, String password) {
		this.setFirstName(name);
		this.setEmail(email);
		this.setPassword(password);
	}

	@Override
	public void update(Notification n) {
		Notification clone = n.clone();
		clone.setOwner(this);
		notifications.add(clone);
	}
}
