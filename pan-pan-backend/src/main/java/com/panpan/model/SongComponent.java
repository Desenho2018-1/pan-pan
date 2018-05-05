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

	@ManyToMany(mappedBy = "songs")
	private List<Band> bands;
}
