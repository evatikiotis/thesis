package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSpot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "spot_dive_spot")
public class DiveSpot {
    @Id
    @Column(name="spot_id")
    private int id;
    @Column(name = "rating")
    private String rating;
    @Column(name = "logged_dives")
    private String loggedDives;
    @Column(name="max_depth")
    private String maxDepth;

    @Column(name="entry_type")
    private String entryType;
    @Column(name="water_environment_type")
    private String waterEnvironmentType;
    @Column(name="salinity")
    private String salinity;
    @Column(name="primary_bottom_type")
    private String primaryBottomType;
    @Column(name="description")
    private String description;

    public DiveSpot(int id, String rating, String loggedDives, String maxDepth, String entryType, String waterEnvironmentType, String salinity, String primaryBottomType, String description) {
        super();
        this.id = id;
        this.rating = rating;
        this.loggedDives = loggedDives;
        this.maxDepth = maxDepth;
        this.entryType = entryType;
        this.waterEnvironmentType = waterEnvironmentType;
        this.salinity = salinity;
        this.primaryBottomType = primaryBottomType;
        this.description = description;
    }

    public DiveSpot(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getLoggedDives() {
        return loggedDives;
    }

    public void setLoggedDives(String loggedDives) {
        this.loggedDives = loggedDives;
    }

    public String getMaxDepth() {
        return maxDepth;
    }

    public void setMaxDepth(String maxDepth) {
        this.maxDepth = maxDepth;
    }

    public String getEntryType() {
        return entryType;
    }

    public void setEntryType(String entryType) {
        this.entryType = entryType;
    }

    public String getWaterEnvironmentType() {
        return waterEnvironmentType;
    }

    public void setWaterEnvironmentType(String waterEnvironmentType) {
        this.waterEnvironmentType = waterEnvironmentType;
    }

    public String getSalinity() {
        return salinity;
    }

    public void setSalinity(String salinity) {
        this.salinity = salinity;
    }

    public String getPrimaryBottomType() {
        return primaryBottomType;
    }

    public void setPrimaryBottomType(String primaryBottomType) {
        this.primaryBottomType = primaryBottomType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
