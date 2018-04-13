package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "app_user_spot_favourite")
public class User_Spot_Favourite {

    @EmbeddedId
    private User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey;

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
