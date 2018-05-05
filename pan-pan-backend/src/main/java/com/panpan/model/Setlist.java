package com.panpan.model;


import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Setlist {

	@Id
	private Long id;

	@ManyToOne
	@JoinColumn(name = "rehearsal_id")
	private Rehearsal rehearsal;

}