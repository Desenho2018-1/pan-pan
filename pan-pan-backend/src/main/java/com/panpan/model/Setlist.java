package com.panpan.model;

import java.util.ArrayList;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Setlist {
    
    @Id
    @GeneratedValue
    public Long id;
    private String name;
    private ArrayList<Song> songs;

    @ManyToOne
    @JsonIgnore
    @NotNull
    private Band band;

    @ManyToOne
	@JoinColumn(name = "rehearsal_id")
	private Rehearsal rehearsal;

    public Setlist() {}

    public Setlist(Band band, String name, ArrayList<Song> songs) {
        this.band = band;
        this.name = name;
        this.songs = songs;
    }
}
