package com.panpan.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Past;
import javax.validation.constraints.Email;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import com.panpan.model.Band;

@Data
@Entity
public class User {

    private @Id @GeneratedValue Long id;

    @NotNull
    @Size(min=2, max=30)
    private String firstName;

    @NotNull
    @Size(min=2, max=30)
    private String lastName;

    @NotNull
    @Size(min=2, max=30)
    private String userName;

    @NotNull
    @Past
    private Date birthDate;

    @Email
    private String email;

    @NotNull
    private String password;

    @NotNull
    private String state;

    @NotNull
    private String city;

    private ArrayList<String> instruments;

    private String role;

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

    public User(String name, String email, String password) {
      this.setFirstName(name);
      this.setEmail(email);
      this.setPassword(password);
    }
}
