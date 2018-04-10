package com.tuc.thesis.spring.boot.web.map_app.image;

import java.io.Serializable;

public class AppImage implements Serializable {
    private byte[] image;

    public AppImage() {
    }

    public AppImage(byte[] image) {
        this.image = image;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
