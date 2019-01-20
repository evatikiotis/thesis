package com.tuc.thesis.spring.boot.web.map_app.spot;

public class SpotDto {
    private int id;
    private String name;
    private double latitude;
    private double longitude;
    private String type;
    private double averageRating;
    private Long numberOfRatings;
    private String address;


    public SpotDto(int id, String name, double latitude, double longitude, String type, double averageRating, Long numberOfRatings) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;
    }


    public SpotDto(int id, String name, double latitude, double longitude, String type, double averageRating, Long numberOfRatings, String address) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;
        this.address = address;
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

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getNumberOfRatings() {
        return numberOfRatings;
    }

    public void setNumberOfRatings(Long numberOfRatings) {
        this.numberOfRatings = numberOfRatings;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}



