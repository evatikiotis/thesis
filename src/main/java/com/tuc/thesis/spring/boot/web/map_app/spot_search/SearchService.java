package com.tuc.thesis.spring.boot.web.map_app.spot_search;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotDto;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotRepository;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    public Page<Spot> getSearchResults(String type, String searchTerm, int page, String sortBy) {
        if(sortBy.equals("averageRating")) {
            return spotRepository.findAll(new PageRequest(page,20, Sort.Direction.DESC, "averageRating"));
//            return spotRepository.getSearchResults(searchTerm, type, new PageRequest(page,20, Sort.Direction.DESC, sortBy));
        }
        return spotRepository.findAll(new PageRequest(page,20, Sort.Direction.ASC, sortBy));
//        return spotRepository.getSearchResults(searchTerm, type, new PageRequest(page,20, Sort.Direction.ASC, sortBy));
    }
}
