package com.tuc.thesis.spring.boot.web.map_app.spot_comment;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class Spot_Comment_CompositeKey implements Serializable {
    @Column(name = "comment")
    private String comment;

    @Column(name = "user_username")
    private String user_username;

    @Column(name="spot_id")
    private int spot_id;

    public Spot_Comment_CompositeKey() {
    }

    public Spot_Comment_CompositeKey(String comment, String user_username, int spot_id) {
        this.comment = comment;
        this.user_username = user_username;
        this.spot_id = spot_id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUser_username() {
        return user_username;
    }

    public void setUser_username(String user_username) {
        this.user_username = user_username;
    }

    public int getSpot_id() {
        return spot_id;
    }

    public void setSpot_id(int spot_id) {
        this.spot_id = spot_id;
    }
}
