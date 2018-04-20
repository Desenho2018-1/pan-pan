package panpan.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonProperty;

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
        setRole((("User")));
    }

    public User(String email, String password){
        this.setEmail((email));
        this.setPassword((password));
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getBirthdate() {
		return birthdate;
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

	public void setCity(String city) {
		this.city = city;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public ArrayList<String> getInstruments() {
		return instruments;
	}

	public void setInstruments(ArrayList<String> instruments) {
		this.instruments = instruments;
	}
}