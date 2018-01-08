package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiveSchoolSpotController {
    @Autowired
    public DiveSchoolSpotService diveSchoolSpotService;

    @RequestMapping ("/spots/scubadiving/school/{id}")
    public DiveSchoolSpot getDiveSchoolSpot(@PathVariable int id){return diveSchoolSpotService.getDiveSchoolSpot(id); }
}
