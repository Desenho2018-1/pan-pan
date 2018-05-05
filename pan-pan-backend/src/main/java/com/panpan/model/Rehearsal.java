package com.panpan.model;


import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.*;
import lombok.Data;

import com.panpan.model.Setlist;

@Data
@Entity
public class Rehearsal {

	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(mappedBy = "rehearsal")
	private List<Setlist> setLists;

	@NotNull
	private Date date;

	public Rehearsal(){}

}
