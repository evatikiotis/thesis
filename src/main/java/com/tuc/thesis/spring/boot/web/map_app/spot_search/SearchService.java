package com.tuc.thesis.spring.boot.web.map_app.spot_search;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotRepository;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    DiveSchoolSpotRepository diveSchoolSpotRepository;
    @Autowired
    SpotRepository spotRepository;

    public List<DiveSchoolSpot> getScubaSchoolsRecommendations(){
        return diveSchoolSpotRepository.getScubaSchoolsRecommendations();
    }

    public List<ScubaDivingSchoolSearchDTO> getScubaDivingSchoolRatingsDTOS(){
        return spotRepository.getScubaDivingSchoolRatingsDTOS();
//        return diveSchoolSpotRepository.getScubaDivingSchoolRatingsDTOS();
    }

    public List<ScubaDivingSchoolSearchDTO> getKitesurfingSearchDTOS(){
        return spotRepository.getKitesurfingSearchDTOS();
//        return diveSchoolSpotRepository.getScubaDivingSchoolRatingsDTOS();
    }
    public List<ScubaDivingSchoolSearchDTO> getScubaSpotsSearchDTOS(){
            return spotRepository.getScubaSpotsSearchDTOS();
    //        return diveSchoolSpotRepository.getScubaDivingSchoolRatingsDTOS();
        }

    public Iterable<Spot> getSearchResults(String type, String searchTerm, int page) {
        return spotRepository.getSearchResults(searchTerm, type, new PageRequest(page,60, Sort.Direction.ASC, "name"));
    }
}
