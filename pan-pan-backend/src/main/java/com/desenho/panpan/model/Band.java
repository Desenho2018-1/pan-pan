package com.desenho.panpan.model;

import java.util.List;

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

  @OneToMany(mappedBy = "band")
  private List<User> members;

  private String genre;

  private Date creationDate;
  private String name;

  private String city;

  public Band(String name){
    this.name = name;
  }

  public String getName(){
    return this.name;
  }
}
