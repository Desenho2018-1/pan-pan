package com.panpan.model;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.panpan.model.User;

import lombok.Data;

@Data
@Entity
public class VerificationToken {
	 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Id Long id;
    private Date expiryDate;
    private @JsonIgnore String token;
    private static final int EXPIRATION = 60 * 24;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
    
    public VerificationToken() {
    	super();
    }
    
    public VerificationToken(User user) {
    	this.token = UUID.randomUUID().toString();
    	this.expiryDate = calculateExpiryDate(EXPIRATION);
    	this.user = user;
    }

    public Boolean hasExpired() {
		Date curDate = new Date();
		
		if(expiryDate.before(curDate)) {
			return true;
		}else {
			return false;
		}
	}

	private static Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }
	
}
