package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
@Embeddable
public class User_Interest_CompositeKey implements Serializable {
    @Column(name = "user_username", nullable = false)
    private String user_username;
    @Column(name = "interest")
    private String interest;




    public User_Interest_CompositeKey(String user_username, String interest) {
        this.user_username = user_username;
        this.interest = interest;
    }

    public User_Interest_CompositeKey() {
    }

    public String getUser_username() {
        return user_username;
    }

    public void setUser_username(String user_username) {
        this.user_username = user_username;
    }

    public String getUser_interest() {
        return interest;
    }

    public void setUser_interest(String user_interest) {
        this.interest = user_interest;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }


}
