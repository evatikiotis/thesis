package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "dive_school")
public class DiveSchoolSpot {
    @Id
    @Column(name = "id")
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

    public DiveSchoolSpot(int id, String address, String contact, String email, String website, byte[] image) {
        super();
        this.id = id;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.website = website;
        this.image = image;
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
}
