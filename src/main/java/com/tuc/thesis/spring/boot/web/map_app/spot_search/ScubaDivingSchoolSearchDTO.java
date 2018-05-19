package com.tuc.thesis.spring.boot.web.map_app.spot_search;

public class ScubaDivingSchoolSearchDTO {
    private int id;
    private String name;
    private String type;
    private double averageRating = 0.0;
    private long numberOfRatings = 0;

    private long timesInFavourites;
    private int rating;




    public ScubaDivingSchoolSearchDTO() {
    }

    public ScubaDivingSchoolSearchDTO(int id, String name, String type, double averageRating, long numberOfRatings) {
        this.id = id;
        this.name = name;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;
        this.type = type;
//        this.timesInFavourites = timesInFavourites;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public long getNumberOfRatings() {
        return numberOfRatings;
    }

    public void setNumberOfRatings(long numberOfRatings) {
        this.numberOfRatings = numberOfRatings;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getTimesInFavourites() {
        return timesInFavourites;
    }

    public void setTimesInFavourites(long timesInFavourites) {
        this.timesInFavourites = timesInFavourites;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
