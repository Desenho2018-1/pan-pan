package panpan.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class User {

	@Id
	@GeneratedValue
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
    private ArrayList<String> instruments;
    
    @JsonProperty
    private Boolean active;

    public User() {
        super();
        active = (Boolean.FALSE);
        role = ("User");
    }

    public User(String email, String password){
        this.email = email;
        this.password = password;
    }

}