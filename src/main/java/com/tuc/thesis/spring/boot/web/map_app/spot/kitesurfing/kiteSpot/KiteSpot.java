package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "kite_spot")
public class KiteSpot {
    @Id
    @Column(name = "id")
    private int id;

    //general
    @Column(name = "water_type")
    private String waterType;
    @Column(name = "level")
    private String level;
    @Column(name = "features")
    private String features;

    //water
    @Column(name = "wave_type")
    private String waveType;
    @Column(name = "water_hazards")
    private String waterHazards;
    @Column(name = "water_cleanness")
    private String waterCleanness;
    @Column(name = "water_best_tide")
    private String waterBestTide;

    //beach
    @Column(name = "beach_type")
    private String beachType;
    @Column(name = "beach_size")
    private String beachSize;
    @Column(name = "beach_hazards")
    private String beachHazards;
    @Column(name = "beach_months_used")
    private String beachMonthsUsed;

    //winds
    @Column(name = "best_months")
    private String bestMonths;
    @Column(name = "wind_type")
    private String windType;
    @Column(name = "wind_best_direction")
    private String windBestDirection;
    @Column(name = "wind_main_direction")
    private String windMainDirection;

    public KiteSpot(int id, String waterType, String level, String features, String waveType, String waterHazards, String waterCleanness, String waterBestTide, String beachType, String beachSize, String beachHazards, String beachMonthsUsed, String bestMonths, String windType, String windBestDirection, String windMainDirection) {
        super();
        this.id = id;
        this.waterType = waterType;
        this.level = level;
        this.features = features;
        this.waveType = waveType;
        this.waterHazards = waterHazards;
        this.waterCleanness = waterCleanness;
        this.waterBestTide = waterBestTide;
        this.beachType = beachType;
        this.beachSize = beachSize;
        this.beachHazards = beachHazards;
        this.beachMonthsUsed = beachMonthsUsed;
        this.bestMonths = bestMonths;
        this.windType = windType;
        this.windBestDirection = windBestDirection;
        this.windMainDirection = windMainDirection;
    }
    public KiteSpot(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWaterType() {
        return waterType;
    }

    public void setWaterType(String waterType) {
        this.waterType = waterType;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public String getWaveType() {
        return waveType;
    }

    public void setWaveType(String waveType) {
        this.waveType = waveType;
    }

    public String getWaterHazards() {
        return waterHazards;
    }

    public void setWaterHazards(String waterHazards) {
        this.waterHazards = waterHazards;
    }

    public String getWaterCleanness() {
        return waterCleanness;
    }

    public void setWaterCleanness(String waterCleanness) {
        this.waterCleanness = waterCleanness;
    }

    public String getWaterBestTide() {
        return waterBestTide;
    }

    public void setWaterBestTide(String waterBestTide) {
        this.waterBestTide = waterBestTide;
    }

    public String getBeachType() {
        return beachType;
    }

    public void setBeachType(String beachType) {
        this.beachType = beachType;
    }

    public String getBeachSize() {
        return beachSize;
    }

    public void setBeachSize(String beachSize) {
        this.beachSize = beachSize;
    }

    public String getBeachHazards() {
        return beachHazards;
    }

    public void setBeachHazards(String beachHazards) {
        this.beachHazards = beachHazards;
    }

    public String getBeachMonthsUsed() {
        return beachMonthsUsed;
    }

    public void setBeachMonthsUsed(String beachMonthsUsed) {
        this.beachMonthsUsed = beachMonthsUsed;
    }

    public String getBestMonths() {
        return bestMonths;
    }

    public void setBestMonths(String bestMonths) {
        this.bestMonths = bestMonths;
    }

    public String getWindType() {
        return windType;
    }

    public void setWindType(String windType) {
        this.windType = windType;
    }

    public String getWindBestDirection() {
        return windBestDirection;
    }

    public void setWindBestDirection(String windBestDirection) {
        this.windBestDirection = windBestDirection;
    }

    public String getWindMainDirection() {
        return windMainDirection;
    }

    public void setWindMainDirection(String windMainDirection) {
        this.windMainDirection = windMainDirection;
    }
}
