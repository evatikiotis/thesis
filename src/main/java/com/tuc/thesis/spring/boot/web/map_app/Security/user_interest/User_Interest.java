package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;



import javax.persistence.*;


@Entity(name = "app_user_interest")

public class User_Interest {

    @EmbeddedId
    private User_Interest_CompositeKey user_interest_key;

    public User_Interest(User_Interest_CompositeKey user_interest_key) {
        this.user_interest_key = user_interest_key;
    }

    public User_Interest() {
    }

    public User_Interest_CompositeKey getUser_interest_key() {
        return user_interest_key;
    }

    public void setUser_interest_key(User_Interest_CompositeKey user_interest_key) {
        this.user_interest_key = user_interest_key;
    }
}
