package com.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.*;
import java.util.Date;
import lombok.Data;

import com.panpan.model.User;

@Data
@Entity
public class Band {
    @Id
    @GeneratedValue
    private Long id;

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

    public Band(){}

    public Band(String name, String genre, User user){
        ArrayList<User> members = new ArrayList<User>();
        members.add(user);
        setMembers(members);
        setName(name);
        setGenre(genre);
        setCreationDate(new Date());
    }

}
