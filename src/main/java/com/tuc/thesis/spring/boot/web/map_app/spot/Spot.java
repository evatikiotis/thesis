package com.tuc.thesis.spring.boot.web.map_app.spot;

import com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite.User_Spot_Favourite;
import com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating.User_Spot_Rating;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "spot")
public class Spot implements Serializable{
    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "spot", optional = false)
    private User_Spot_Favourite user_spot_favourite;

    @OneToOne(fetch = FetchType.LAZY,
            mappedBy = "spot", optional = false)
    private DiveSchoolSpot diveSchoolSpot;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "spot")
    List<User_Spot_Rating> user_spot_ratings;





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


    public Spot(int id, String name, double latitude, double longitude, String type) {
        super();
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
    }

    public Spot(User_Spot_Favourite user_spot_favourite, DiveSchoolSpot diveSchoolSpot, List<User_Spot_Rating> user_spot_ratings, int id, String name, double latitude, double longitude, String type) {
        this.user_spot_favourite = user_spot_favourite;
        this.diveSchoolSpot = diveSchoolSpot;
        this.user_spot_ratings = user_spot_ratings;
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
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

//    public User_Spot_Favourite getUser_spot_favourite() {
//        return user_spot_favourite;
//    }
//
//    public void setUser_spot_favourite(User_Spot_Favourite user_spot_favourite) {
//        this.user_spot_favourite = user_spot_favourite;
//    }

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
}
