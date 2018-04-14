package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class User_Spot_RatingService {

    @Autowired User_Spot_RatingRepository user_spot_ratingRepository;

    public RatingObject getRatingObject_guest(int spot_id){
        RatingObject ratingObject = new RatingObject(
                user_spot_ratingRepository.selectAverageRating(spot_id),
                user_spot_ratingRepository.selectCountRating(spot_id));
        return ratingObject;

    }
}
