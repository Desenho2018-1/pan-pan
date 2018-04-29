package com.panpan.model;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.*;
import java.util.Date;
import lombok.Data;

import com.panpan.controller.NotificationController;
import com.panpan.model.User;

@Data
@Entity
public class Band {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @OneToMany(mappedBy = "band")
    private List<User> members;
    
    @OneToOne(cascade=CascadeType.ALL)
    private BandActivity activity;
    
    @NotNull
    @Size(min=2, max=50)
    private String genre;

    @NotNull
    private Date creationDate;

    @NotNull
    @Size(min=2, max=50)
    private String name;

    public Band(){}

    public Band(User u,String name, String genre){
        ArrayList<User> members = new ArrayList<User>();
        members.add(u);
        activity = new BandActivity();
        activity.addObserver(u);
        NotificationController controller = new NotificationController();
        controller.createNotificationForBand(activity.createNotification(u, "AAA", "uashusdh"));
        setMembers(members);
        setName(name);
        setGenre(genre);
        setCreationDate(new Date());
    }

}
