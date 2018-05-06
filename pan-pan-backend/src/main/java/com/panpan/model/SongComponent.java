package com.panpan.model;

import javax.persistence.ManyToMany;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import lombok.Data;
import java.util.List;

@Data
@Entity
public abstract class SongComponent {
	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String bandNAme;
	
	private String style;
	@ManyToMany(mappedBy = "songs")
	private List<Band> bands;

	public SongComponent(Long id, String name,String bandNAme) {
	
		this.id = id;
		this.name = name;
		this.bandNAme = bandNAme;
	}
	
	public SongComponent() {}

	public SongComponent(String name, String bandNAme, String style) {
		super();
		this.name = name;
		this.bandNAme = bandNAme;
		this.style = style;
	}
	
	
}
