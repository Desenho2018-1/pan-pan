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

	private String bandName;
	
	private String style;
	@ManyToMany(mappedBy = "songs")
	private List<Band> bands;

	public SongComponent(Long id, String name,String bandName) {
	
		this.id = id;
		this.name = name;
		this.bandName = bandName;
	}
	
	public SongComponent() {}

	public SongComponent(String name, String bandName, String style) {
		super();
		this.name = name;
		this.bandName = bandName;
		this.style = style;
	}
	
	
}
