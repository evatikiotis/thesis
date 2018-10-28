package com.tuc.thesis.spring.boot.web.map_app.spot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SpotService {
    @Autowired
    private SpotRepository spotRepository;

    public List<Spot> getAllSpots() {

        return spotRepository.getAllSpots();
    }

    public List<Spot> getKiteSpots() {
        List<Spot> spots = new ArrayList<>();
        spotRepository.selectKiteSpots().forEach(spots::add);
        return spots;
    }

    public void addSpot(Spot spot) {
        spotRepository.save(spot);
    }

    public Spot getSpot(int id) {
        return spotRepository.findOne(id);
    }

    public List<String> geAllSpotNames(){
        return spotRepository.getAllSpotNames();
    }

    public List<SpotDto> getSpot_RatingsDTO(){
        return spotRepository.getSpot_RatingsDTO();
    }
}
