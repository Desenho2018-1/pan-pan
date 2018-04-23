package com.panpan.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import com.panpan.model.Band;

@Data
@Entity
public class User {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String username;
    private Date birthdate;
    private String email;
    private String password;
    private String state;
    private String city;
    private String role;
    private ArrayList<String> instruments;

    @ManyToOne
    @JoinColumn(name = "band_id")
    private Band band;
    
    @JsonProperty
    private Boolean active;

    public User() {
        active = (Boolean.FALSE);
        role = (("User"));
    }

    public User(String name, String email){
    	this.setFirstName(name);
    	this.setEmail((email));
    }
}