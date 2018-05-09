package com.tuc.thesis.spring.boot.web.map_app.recommendations;

public class ScubaDivingSchoolRatingsDTO {
    private int id;
    private String name;
    private double averagerRating;




    public ScubaDivingSchoolRatingsDTO() {
    }

    public ScubaDivingSchoolRatingsDTO(int id, String name, double averagerRating) {
        this.id = id;
        this.name = name;
        this.averagerRating = averagerRating;

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

    public double getRating() {
        return averagerRating;
    }

    public void setRating(double averagerRating) {
        this.averagerRating = averagerRating;
    }

}
