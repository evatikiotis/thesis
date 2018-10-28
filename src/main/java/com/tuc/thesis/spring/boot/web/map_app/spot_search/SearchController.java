package com.tuc.thesis.spring.boot.web.map_app.spot_search;

import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {
    @Autowired
    SearchService searchService;

    @RequestMapping("/get-scuba-diving-schools-recommendations")
    public List<DiveSchoolSpot> getScubaSchoolsRecommendations(){
        return searchService.getScubaSchoolsRecommendations();
    }

    @RequestMapping("/scuba-diving-dtos")
    public List<ScubaDivingSchoolSearchDTO> getScubaDivingSchoolRatingsDTOS(){
        return searchService.getScubaDivingSchoolRatingsDTOS();
    }

    @RequestMapping("/get-kitesurfing-search-dtos")
    public List<ScubaDivingSchoolSearchDTO> getKitesurfingSearchDTOS(){
        return searchService.getKitesurfingSearchDTOS();
    }
    @RequestMapping("/get-scuba-spots-search-dtos")
    public List<ScubaDivingSchoolSearchDTO> getScubaSpotsSearchDTOS(){
        return searchService.getScubaSpotsSearchDTOS();
    }

    @RequestMapping("/search")
    public ResponseEntity<?> searchForSpots(@RequestParam("searchTerm") String searchTerm, @RequestParam("spotType") String spotType, @RequestParam("page") int page, @RequestParam("sortBy") String sortBy) {
        return new ResponseEntity<>(searchService.getSearchResults(spotType, searchTerm, page, sortBy), HttpStatus.OK);
    }


}
