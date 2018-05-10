package com.tuc.thesis.spring.boot.web.map_app.recommendations;

public class ScubaDivingSchoolRatingsDTO {
    private int id;
    private String name;
    private double averageRating = 0.0;
    private long numberOfRatings = 0;
    private String type;




    public ScubaDivingSchoolRatingsDTO() {
    }

    public ScubaDivingSchoolRatingsDTO(int id, String name, String type, double averageRating, long numberOfRatings) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;

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

}
