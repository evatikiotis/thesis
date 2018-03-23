package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
@Embeddable
public class User_Interest_CompositeKey implements Serializable {
    @Column(name = "app_user_username")
    private String user_username;
    @Column(name = "interest_interest")
    private String user_interest;


    public User_Interest_CompositeKey(String user_username, String user_interest) {
        this.user_username = user_username;
        this.user_interest = user_interest;
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
        return user_interest;
    }

    public void setUser_interest(String user_interest) {
        this.user_interest = user_interest;
    }
}
