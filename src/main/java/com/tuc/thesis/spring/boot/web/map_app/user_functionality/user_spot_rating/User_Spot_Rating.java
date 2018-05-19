package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_rating;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name="app_user_spot_rating")
public class User_Spot_Rating implements Serializable{
    @EmbeddedId
    private User_Spot_RatingCompositeKey user_spot_ratingKey;

    @Column(name="rating", nullable = true)
    private int rating;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "spot_id", referencedColumnName = "id",nullable = false, insertable = false, updatable = false)
    private Spot spot;


    public User_Spot_Rating() {
    }

    public User_Spot_Rating(User_Spot_RatingCompositeKey user_spot_ratingKey, int rating) {
        this.user_spot_ratingKey = user_spot_ratingKey;
        this.rating = rating;
    }

    public User_Spot_Rating(User_Spot_RatingCompositeKey user_spot_ratingKey, int rating, Spot spot) {
        this.user_spot_ratingKey = user_spot_ratingKey;
        this.rating = rating;
        this.spot = spot;
    }

    public User_Spot_RatingCompositeKey getUser_spot_ratingKey() {
        return user_spot_ratingKey;
    }

    public void setUser_spot_ratingKey(User_Spot_RatingCompositeKey user_spot_ratingKey) {
        this.user_spot_ratingKey = user_spot_ratingKey;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }
}
