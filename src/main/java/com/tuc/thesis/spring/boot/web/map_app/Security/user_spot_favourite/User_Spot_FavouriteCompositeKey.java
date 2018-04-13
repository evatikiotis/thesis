package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class User_Spot_FavouriteCompositeKey implements Serializable{

    @Column(name = "user_username")
    private String user_username;

    @Column(name = "spot_id")
    private int spot_id;

    @Column(name = "notes")
    private String notes;

    public User_Spot_FavouriteCompositeKey() {
    }

    public User_Spot_FavouriteCompositeKey(String user_username, int spot_id, String notes) {
        this.user_username = user_username;
        this.spot_id = spot_id;
        this.notes = notes;
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

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
