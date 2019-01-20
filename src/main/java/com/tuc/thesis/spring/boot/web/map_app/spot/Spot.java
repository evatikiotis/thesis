package com.tuc.thesis.spring.boot.web.map_app.spot;

import com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_favourite.User_Spot_Favourite;
import com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_rating.User_Spot_Rating;
import com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.KiteSpot;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "spot")
public class Spot implements Serializable{
//    @OneToMany(fetch = FetchType.LAZY,
//            cascade =  CascadeType.ALL,
//            mappedBy = "spot")
//    private User_Spot_Favourite user_spot_favourite;



    @OneToOne(fetch = FetchType.LAZY,
            mappedBy = "spot", optional = false)
    private DiveSchoolSpot diveSchoolSpot;

    @OneToOne(fetch = FetchType.LAZY,
            mappedBy = "spot", optional = false)
    private KiteSpot kiteSpot;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "spot")
    List<User_Spot_Rating> user_spot_ratings;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "spot")
    List<User_Spot_Favourite> user_spot_favourites;





    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "latitude")
    private double latitude;
    @Column(name = "longitude")
    private double longitude;
    @Column(name = "type")
    private String type;
    @Column(name = "address")
    private String address;
    @Column(name = "average_rating")
    private Double averageRating;
    @Column(name = "number_of_ratings")
    private Long numberOfRatings;


    public Spot(int id, String name, double latitude, double longitude, String type, String address) {
        super();
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.address = address;
    }

    public Spot(int id, String name, String type, String address) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
    }

    public Spot() {}

    public long getId() {
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(Double averageRating) {
        this.averageRating = averageRating;
    }

    public Long getNumberOfRatings() {
        return numberOfRatings;
    }

    public void setNumberOfRatings(Long numberOfRatings) {
        this.numberOfRatings = numberOfRatings;
    }

    //    public DiveSchoolSpot getDiveSchoolSpot() {
//        return diveSchoolSpot;
//    }
//
//    public void setDiveSchoolSpot(DiveSchoolSpot diveSchoolSpot) {
//        this.diveSchoolSpot = diveSchoolSpot;
//    }
//
//    public List<User_Spot_Rating> getUser_spot_ratings() {
//        return user_spot_ratings;
//    }
//
//    public void setUser_spot_ratings(List<User_Spot_Rating> user_spot_ratings) {
//        this.user_spot_ratings = user_spot_ratings;
//    }
//
//    public List<User_Spot_Favourite> getUser_spot_favourites() {
//        return user_spot_favourites;
//    }
//
//    public void setUser_spot_favourites(List<User_Spot_Favourite> user_spot_favourites) {
//        this.user_spot_favourites = user_spot_favourites;
//    }
}
