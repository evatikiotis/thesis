package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;

import javax.persistence.*;

@Entity(name = "app_user_spot_favourite")
public class User_Spot_Favourite {

    @EmbeddedId
    private User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey;

    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "spot_id", nullable = false, insertable = false, updatable = false)
    private Spot spot;

    public User_Spot_Favourite() {
    }

    public User_Spot_Favourite(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
    }

    public User_Spot_FavouriteCompositeKey getUser_spot_favouriteCompositeKey() {
        return user_spot_favouriteCompositeKey;
    }

    public void setUser_spot_favouriteCompositeKey(User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey) {
        this.user_spot_favouriteCompositeKey = user_spot_favouriteCompositeKey;
    }
}
