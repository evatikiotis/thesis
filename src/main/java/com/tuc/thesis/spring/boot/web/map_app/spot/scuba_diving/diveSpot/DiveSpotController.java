package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiveSpotController {
    @Autowired
    public DiveSpotService diveSpotService;

    @RequestMapping ("/spots/scubadiving/{id}")
    public DiveSpot getDiveSpot(@PathVariable int id){return diveSpotService.getDiveSpot(id); }
}
