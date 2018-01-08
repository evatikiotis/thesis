package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiveSchoolSpotService {
    @Autowired
    private DiveSchoolSpotRepository diveSchoolSpotRepository;

    public List<DiveSchoolSpot> getAllSpots() {
        List<DiveSchoolSpot> diveSchoolSpots = new ArrayList<>();
        diveSchoolSpotRepository.findAll().forEach(diveSchoolSpots::add);
        return diveSchoolSpots;
    }

    public void addSpot(DiveSchoolSpot diveSchoolSpot) {
        diveSchoolSpotRepository.save(diveSchoolSpot);
    }

    public DiveSchoolSpot getDiveSchoolSpot(int id) {
        return diveSchoolSpotRepository.findOne(id);
    }
}
