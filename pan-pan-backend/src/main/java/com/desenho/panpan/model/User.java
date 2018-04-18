package com.desenho.panpan.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;

@Data
@Entity
public class User {

    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private Date birthdate;
    private String email;
    private String password;
    private String state;
    private String city;
    private String role;

    @ElementCollection
    private ArrayList<String> instruments;

    @JsonProperty
    private Boolean active;

    public User() {
        super();
        setActive(Boolean.FALSE);
        setRole("User");
    }

    public User(String email, String password){
        this.email = email;
        this.password = password;
    }

}