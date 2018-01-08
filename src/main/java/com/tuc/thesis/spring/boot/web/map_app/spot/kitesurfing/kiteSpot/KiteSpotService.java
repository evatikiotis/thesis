package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KiteSpotService {
    @Autowired
    private KiteSpotRepository kiteSpotRepository;

    public List<KiteSpot> getAllSpots() {
        List<KiteSpot> kiteSpots = new ArrayList<>();
        kiteSpotRepository.findAll().forEach(kiteSpots::add);
        return kiteSpots;
    }

    public void addSpot(KiteSpot kiteSpot) {
        kiteSpotRepository.save(kiteSpot);
    }

    public KiteSpot getSpot(int id) {
        return kiteSpotRepository.findOne(id);
    }
}
