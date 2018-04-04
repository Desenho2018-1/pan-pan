package email_notification.model;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.Calendar;

import com.sun.javafx.beans.IDProperty;


@Entity
public class VerificationToken {
    private final int EXPIRATION = 60 * 24; //24 hours

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String token;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
    
    private Date expiryDate;

    private Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getExpiryDate() {
        return this.expiryDate;
    }

    public void setExpiryDate(int expiryTimeInMinutes) {
        this.expiryDate = this.calculateExpiryDate(expiryTimeInMinutes);
    }
}