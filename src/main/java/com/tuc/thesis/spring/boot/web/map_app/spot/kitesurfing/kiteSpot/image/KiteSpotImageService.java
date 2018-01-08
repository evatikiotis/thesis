package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KiteSpotImageService {
    @Autowired
    private KiteSpotImageRepository kiteSpotImageRepository;

    public List<KiteSpotImage> getKiteSpotImages(int id){
        return kiteSpotImageRepository.find(id);
    }

//    public KiteSpotImage getKiteSpotImage(int id, int row){
//        return kiteSpotImageRepository.getImage(id, row);
//    }
}
