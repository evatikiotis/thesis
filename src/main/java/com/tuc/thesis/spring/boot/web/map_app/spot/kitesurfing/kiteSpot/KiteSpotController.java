package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KiteSpotController {
    @Autowired
    private KiteSpotService kiteSpotService;

    @RequestMapping("/spots/kite")
    public List<KiteSpot> getAllSpots(){
        return kiteSpotService.getAllSpots();
    }


    @RequestMapping("/spots/kite/{id}")
    public KiteSpot getSpot(@PathVariable int id){
        return kiteSpotService.getSpot(id);
    }


}
