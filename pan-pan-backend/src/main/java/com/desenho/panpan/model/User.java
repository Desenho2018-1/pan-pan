package com.desenho.panpan.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;

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

    @ElementCollection
    private ArrayList<String> instruments;

    private String role;

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

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public ArrayList<String> getInstruments() {
        return instruments;
    }

    public void setInstruments(ArrayList<String> instruments) {
        this.instruments = instruments;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }


}
