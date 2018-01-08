package com.tuc.thesis.spring.boot.web.map_app.spot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpotController {
    @Autowired
    private SpotService spotService;

    @RequestMapping("/spots")
    public List<Spot> getAllSpots(){
        return spotService.getAllSpots();
    }

    @RequestMapping(value = "/spots/add", method = RequestMethod.POST)
    public void addSpot(@RequestBody Spot spot){
        spotService.addSpot(spot);
    }

    @RequestMapping("/spots/{id}")
    public Spot getSpot(@PathVariable int id){
        return spotService.getSpot(id);
    }


}
