package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_interest;



import com.tuc.thesis.spring.boot.web.map_app.user_functionality.user.User;

import javax.persistence.*;


@Entity(name = "app_user_interest")
public class User_Interest{
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_username", nullable = false, insertable = false, updatable = false)
    private User user;

    @EmbeddedId
    private User_Interest_CompositeKey user_interest_key;

    @Column(name ="level")
    private String level;

    public User_Interest() {
    }

    public User_Interest(User_Interest_CompositeKey user_interest_key, String level) {
        this.user_interest_key = user_interest_key;
        this.level = level;
    }

    public User_Interest_CompositeKey getUser_interest_key() {
        return user_interest_key;
    }

    public void setUser_interest_key(User_Interest_CompositeKey user_interest_key) {
        this.user_interest_key = user_interest_key;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
