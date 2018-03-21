package com.tuc.thesis.spring.boot.web.map_app.Security;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "app_user")
public class User {

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "app_user_interest",
            joinColumns = {@JoinColumn(name = "app_user_username")},
            inverseJoinColumns = {@JoinColumn(name = "interest_id")}
    )
    Set<Interest> interests = new HashSet<>();

    @Column(name = "id")
    private int id;

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    public User() {
    }

    public User(int id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

}






