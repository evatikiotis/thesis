package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "app_user_spot_favourite")
public class User_Spot_Favourite implements Serializable{

    @EmbeddedId
    private User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey;

    @Column(name = "notes", updatable = false)
    private String notes;

    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "spot_id", nullable = false, insertable = false, updatable = false)
    private Spot spot;

    public User_Spot_Favourite() {
    }

    public User_Spot_Favourite(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey, String notes) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
        this.notes = notes;
    }

    public User_Spot_Favourite(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey, String notes, Spot spot) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
        this.notes = notes;
        this.spot = spot;
    }

    public User_Spot_FavouriteCompositeKey getUser_spot_favouriteCompositeKey() {
        return user_spot_favouriteCompositeKey;
    }

    public void setUser_spot_favouriteCompositeKey(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }
}
