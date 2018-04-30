package com.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.validation.constraints.*;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import lombok.Data;

import com.panpan.model.User;
import com.panpan.repository.NotificationRepository;

@Data
@Entity
public class Notification implements Cloneable {
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "creator_id")
	private User creator;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "owner_id")
	private User owner;

	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "band_activity_id")
	private BandActivity band;

	private Boolean isRead;
	private String url;
	private String shortText;
	
	public Notification() {
	}
	@Autowired
	public Notification(BandActivity band, User creator, String shortText, String url) {
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
