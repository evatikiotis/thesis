package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class User_Spot_RatingCompositeKey implements Serializable {
    @Column(name = "user_username", nullable = true)
    private String user_username;

    @Column(name = "spot_id", nullable = true)
    private int spot_id;

    public User_Spot_RatingCompositeKey() {
    }

    public User_Spot_RatingCompositeKey(String user_username, int spot_id) {
        this.user_username = user_username;
        this.spot_id = spot_id;
    }

    public String getUser_username() {
        return user_username;
    }

    public void setUser_username(String user_username) {
        this.user_username = user_username;
    }

    public int getSpot_id() {
        return spot_id;
    }

    public void setSpot_id(int spot_id) {
        this.spot_id = spot_id;
    }

}
