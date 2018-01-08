package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiveSpotService {
    @Autowired
    private DiveSpotRepository diveSpotRepository;

    public List<DiveSpot> getAllSpots() {
        List<DiveSpot> diveSpots = new ArrayList<>();
        diveSpotRepository.findAll().forEach(diveSpots::add);
        return diveSpots;
    }

    public void addSpot(DiveSpot diveSpot) {
        diveSpotRepository.save(diveSpot);
    }

    public DiveSpot getDiveSpot(int id) {
        return diveSpotRepository.findOne(id);
    }
}
