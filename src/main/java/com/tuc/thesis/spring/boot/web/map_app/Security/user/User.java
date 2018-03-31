package com.tuc.thesis.spring.boot.web.map_app.Security.user;

import com.tuc.thesis.spring.boot.web.map_app.Security.interest.Interest;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity(name = "app_user")
public class User implements Serializable {



    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "app_user_interest",
            joinColumns = {@JoinColumn(name = "app_user_username")},
            inverseJoinColumns = {@JoinColumn(name = "interest_interest")}


    )
    private List<Interest> interests;



//    private List<Interest> interests;



    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

//    @Temporal(TemporalType.DATE)
//    @Column(name = "birthdate")
//    private Date date;





    public User() {
    }

    public User(List<Interest> interests, String username, String password, String email) {
        this.interests = interests;
        this.username = username;
        this.password = password;
        this.email = email;

    }

//    public Date getDate() {
//        return date;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }

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

    public List<Interest> getInterests() {
        return interests;
    }

    public void setInterests(List<Interest> interests) {
        this.interests = interests;
    }
}






