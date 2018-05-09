package com.tuc.thesis.spring.boot.web.map_app.recommendations;

public class ScubaDivingSchoolRatingsDTO {
    private int id;
    private String name;
    private double averageRating;
    private long numberOfRatings;




    public ScubaDivingSchoolRatingsDTO() {
    }

    public ScubaDivingSchoolRatingsDTO(int id, String name, double averageRating, long numberOfRatings) {
        this.id = id;
        this.name = name;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;

    }

    public ScubaDivingSchoolRatingsDTO(int id, String name) {
        this.id = id;
        this.name = name;
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
}
