package com.desenho.panpan.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.*;
import java.util.Date;

@Entity
public class Band {
  @Id
  @GeneratedValue( strategy=GenerationType.AUTO )
  private int id;

  @OneToMany(mappedBy = "band")
  private List<User> members;

  private String genre;

  private Date creationDate;
  private String name;

  private string city;

  public Band(string name){
    this.name = name;
  }

  public getName(){
    return this.name;
  }
}
