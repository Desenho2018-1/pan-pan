package com.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.ManyToMany;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.validation.constraints.*;
import java.util.Date;
import lombok.Data;

import com.panpan.model.User;

@Data
@Entity
public class Band {
    @Id
    @GeneratedValue
    private Long bandId;

    @NotNull
    @OneToMany(mappedBy = "band")
    private List<User> members;

    @NotNull
    @Size(min=2, max=50)
    private String genre;

    @NotNull
    private Date creationDate;

    @NotNull
    @Size(min=2, max=50)
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "band_music",
      joinColumns = @JoinColumn(name = "song_id", referencedColumnName = "songId"),
      inverseJoinColumns = @JoinColumn(name = "band_id",
      referencedColumnName = "bandId"))
    private List<SongComponent> songs;

    public Band(){}

    public Band(String name, String genre){
        ArrayList<User> members = new ArrayList<User>();
        members.add(new User("Frodo", "Baggins"));
        setMembers(members);
        setName(name);
        setGenre(genre);
        setCreationDate(new Date());
    }

}
