package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "app_user_spot_favourite")
public class User_Spot_Favourite implements Serializable{

    @EmbeddedId
    private User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey;

    @Column(name = "notes", updatable = false)
    private String notes;

//    @ManyToOne(optional = false)
//    @JoinColumn(name = "spot_id", referencedColumnName = "id")
//    private Spot spot;


    public User_Spot_Favourite() {
    }

    public User_Spot_Favourite(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey, String notes) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
        this.notes = notes;
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

}
