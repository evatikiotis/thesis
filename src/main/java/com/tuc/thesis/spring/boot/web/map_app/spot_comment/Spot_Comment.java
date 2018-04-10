package com.tuc.thesis.spring.boot.web.map_app.spot_comment;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.sql.Date;


@Entity(name = "spot_comment")
public class Spot_Comment  {
    @EmbeddedId
    Spot_Comment_CompositeKey spot_comment_key;

    @Column(name = "date")
    Date date;


    public Spot_Comment(Spot_Comment_CompositeKey spot_comment_key, Date date) {
        this.spot_comment_key = spot_comment_key;
        this.date = date;
    }

    public Spot_Comment() {
    }

    public Spot_Comment_CompositeKey getSpot_comment_key() {
        return spot_comment_key;
    }

    public void setSpot_comment_key(Spot_Comment_CompositeKey spot_comment_key) {
        this.spot_comment_key = spot_comment_key;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}