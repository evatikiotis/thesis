package com.tuc.thesis.spring.boot.web.map_app.getLocation;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Results {
    @JsonProperty("address_components")
    List<Address> addressComponents;

    public List<Address> getAddressComponents() {
        return addressComponents;
    }

    public void setAddressComponents(List<Address> addressComponents) {
        this.addressComponents = addressComponents;
    }
}
