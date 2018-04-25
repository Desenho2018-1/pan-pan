package com.panpan.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Setlist {
    public @Id @GeneratedValue Long Id;
    private String name;
    private ArrayList<Song> songs;

    @ManyToOne
    private Band band;

    public Setlist(String name, ArrayList<Song> songs) {
        this.name = name;
        this.songs = songs;
    }
}
