package com.tuc.thesis.spring.boot.web.map_app.Security;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "interest")
public class Interest {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "interest")
    private String interest;

    @ManyToMany(mappedBy = "interests")
    private Set<User> users = new HashSet<>();





    public Interest() {

    }

    public Interest(int id, String interest) {
        this.id = id;
        this.interest = interest;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }
    // standard constructors/getters/setters
}