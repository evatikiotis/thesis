package com.tuc.thesis.spring.boot.web.map_app.recommendations;

import com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating.User_Spot_Rating;
import com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating.User_Spot_RatingRepository;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpot;
import com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot.DiveSchoolSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public class RecommendationService {
    @Autowired
    DiveSchoolSpotRepository diveSchoolSpotRepository;

    public List<DiveSchoolSpot> getScubaSchoolsRecommendations(){
        return diveSchoolSpotRepository.getScubaSchoolsRecommendations();
    }

}
