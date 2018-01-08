package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KiteSpotImageController {
    @Autowired
    private KiteSpotImageService kiteSpotImageService;

    @RequestMapping("/spots/kite_image/{id}")
    public List<KiteSpotImage> getKiteSpotImages(@PathVariable int id){
        return kiteSpotImageService.getKiteSpotImages(id);
    }

//    @RequestMapping("/spots/kite_image/{id}/{row}")
//    public KiteSpotImage getKiteSpotImage(@PathVariable int id, @PathVariable int row){
//        return kiteSpotImageService.getKiteSpotImage(id,row);
//    }
}
