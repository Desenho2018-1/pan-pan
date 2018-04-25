package com.desenho.panpan.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.*;
import lombok.Data;


@Data
@Entity
public class Rehearsal {

	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(mapped_by = "rehearsal")
	private Setlist setList;

	@NotNull
	private Date date;

	public Rehearsal(){}

}
