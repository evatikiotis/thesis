package com.tuc.thesis.spring.boot.web.map_app.spot_search;

import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecommendationsController {
    @Autowired RecommendationService recommendationService;

    @RequestMapping("/get-scuba-diving-schools-recommendations")
    public List<DiveSchoolSpot> getScubaSchoolsRecommendations(){
        return recommendationService.getScubaSchoolsRecommendations();
    }

    @RequestMapping("/scuba-diving-dtos")
    public List<ScubaDivingSchoolSearchDTO> getScubaDivingSchoolRatingsDTOS(){
        return recommendationService.getScubaDivingSchoolRatingsDTOS();
    }

    @RequestMapping("/get-kitesurfing-search-dtos")
    public List<ScubaDivingSchoolSearchDTO> getKitesurfingSearchDTOS(){
        return recommendationService.getKitesurfingSearchDTOS();
    }
    @RequestMapping("/get-scuba-spots-search-dtos")
    public List<ScubaDivingSchoolSearchDTO> getScubaSpotsSearchDTOS(){
        return recommendationService.getScubaSpotsSearchDTOS();
    }
}
