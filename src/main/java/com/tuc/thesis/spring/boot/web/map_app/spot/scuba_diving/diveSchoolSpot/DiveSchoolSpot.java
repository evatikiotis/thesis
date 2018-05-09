package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "spot_dive_school")
public class DiveSchoolSpot implements Serializable {
    @Id
    @Column(name = "spot_id")
    private int id;
    @Column(name = "address")
    private String address;
    @Column(name = "contact")
    private String contact;
    @Column(name = "email")
    private String email;

    @Column(name = "website")
    private String website;
    @Column(name = "image")
    private byte[] image;

    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "spot_id", nullable = false, insertable = false, updatable = false)
    private Spot spot;

    public DiveSchoolSpot(int id, String address, String contact, String email, String website, byte[] image) {
        super();
        this.id = id;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.website = website;
        this.image = image;
    }

    public DiveSchoolSpot(int id, String address, String contact, String email, String website, byte[] image, Spot spot) {
        this.id = id;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.website = website;
        this.image = image;
        this.spot = spot;
    }

    public DiveSchoolSpot() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Spot getSpot() {
        return spot;
    }

    public void setSpot(Spot spot) {
        this.spot = spot;
    }
}
