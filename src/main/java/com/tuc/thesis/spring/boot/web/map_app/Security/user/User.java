package com.tuc.thesis.spring.boot.web.map_app.Security.user;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;


@Entity(name = "app_user")
public class User implements Serializable {

    @Id
    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Lob
    @Type(type="org.hibernate.type.BinaryType")
    @Column(name = "profile_image", columnDefinition = "bytea")
    private byte[] image;






    public User() {
    }


    public User(String username, String password, String email, String address, byte[] image) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
        this.image = image;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}






