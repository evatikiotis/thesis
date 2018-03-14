package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.image;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "spot_kitesurfing_image")
public class KiteSpotImage {


    @Column(name = "kite_spot_id")
    private int id;
    @Id
    @Column(name = "image_id")
    private int imageKey;
    @Column(name = "image")
    private byte[] image;

    public KiteSpotImage(int id, int imageId, byte[] image) {
        super();
        this.id = id;
        this.imageKey = imageId;
        this.image = image;
    }

    public KiteSpotImage(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public int getImageId() {
        return imageKey;
    }

    public void setImageId(int imageId) {
        this.imageKey = imageId;
    }
}
