package com.desenho.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.*;
import java.util.Date;

import com.desenho.panpan.model.User;

@Entity
public class Band {
  @Id
  @GeneratedValue
  private int id;

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

  @NotNull
  @Size(min=2, max=50)
  private String city;

  public Band(String name){
    this.members = new ArrayList<User>();
    setName(name);
  }

  public int getId() {
    return this.id;
  }

  public String getCity() {
    return this.city;
  }

  public void setCity(String city){
    this.city = city;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getGenre() {
    return this.genre;
  }

  public void setCreationDate(Date creationDate) {
      this.creationDate = creationDate;
  }

  public void setMembers(List<User> members) {
    this.members = members;
  }

  public List<User> getMembers() {
    return this.members;
  }

  public Date getCreationDate() {
    return this.creationDate;
  }

  public void setName(String name) {
    this.name = name;
  }
  public String getName(){
    return this.name;
  }

  public void addMember(User member) {
    this.members.add(member);
  }

}
