package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating;

import java.io.Serializable;

public class RatingObject implements Serializable{

    private float averageRating;
    private int ratingsNumber;
    private int userRating;

    public RatingObject() {
    }

    public RatingObject(float averageRating, int ratingsNumber) {
        this.averageRating = averageRating;
        this.ratingsNumber = ratingsNumber;
    }

    public RatingObject(float averageRating, int ratingsNumber, int userRating) {
        this.averageRating = averageRating;
        this.ratingsNumber = ratingsNumber;
        this.userRating = userRating;
    }

    public float getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(float averageRating) {
        this.averageRating = averageRating;
    }

    public int getRatingsNumber() {
        return ratingsNumber;
    }

    public void setRatingsNumber(int ratingsNumber) {
        this.ratingsNumber = ratingsNumber;
    }

    public int getUserRating() {
        return userRating;
    }

    public void setUserRating(int userRating) {
        this.userRating = userRating;
    }
}
