package com.panpan.model;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;

import com.panpan.model.User;

@Data
@Entity
public class Notification implements Cloneable {
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "creator_id")
	private @JsonIgnore User creator;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "owner_id")
	private @JsonIgnore User owner;

	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "band_id")
	private Band band;

	private Boolean isRead;
	private String url;
	private String shortText;
	
	public Notification() {
	}
	@Autowired
	public Notification(Band band, User creator, String shortText, String url) {
		this.setCreator(creator);
		this.setBand(band);
		this.setShortText(shortText);
		this.setIsRead(false);
		this.setUrl(url);
	}

	@Override
	public Notification clone() {
		Notification clone = null;
		try {
			clone = (Notification) super.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return clone;
	}
	

}
