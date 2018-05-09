package com.tuc.thesis.spring.boot.web.map_app.recommendations;

public class ScubaDivingSchoolRatingsDTO {
    private int id;
    private String name;



    public ScubaDivingSchoolRatingsDTO() {
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


}
