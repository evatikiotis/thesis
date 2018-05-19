package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class User_Spot_RatingService {

    @Autowired User_Spot_RatingRepository user_spot_ratingRepository;

    public RatingObject getRatingObject_guest(int spot_id){
        RatingObject ratingObject = new RatingObject();
        try {
            ratingObject.setAverageRating(user_spot_ratingRepository.selectAverageRating(spot_id));
            ratingObject.setRatingsNumber(user_spot_ratingRepository.selectCountRating(spot_id));
            return ratingObject;
        }catch (RuntimeException s){
            return ratingObject;
        }
    }

    public RatingObject getRatingObject_user(String username, int spot_id){

        RatingObject ratingObject = new RatingObject();
        try {
            ratingObject.setAverageRating(user_spot_ratingRepository.selectAverageRating(spot_id));
            ratingObject.setRatingsNumber(user_spot_ratingRepository.selectCountRating(spot_id));

            ratingObject.setUserRating(user_spot_ratingRepository.selectUserRating(username, spot_id));
            return ratingObject;
        }catch (RuntimeException s){
            return ratingObject;
        }

    }

    public void userRateSpot(String username, int spot_id, int rating){
        User_Spot_RatingCompositeKey user_spot_ratingKey = new User_Spot_RatingCompositeKey(username, spot_id);
        User_Spot_Rating user_spot_rating = new User_Spot_Rating(user_spot_ratingKey, rating);
        user_spot_ratingRepository.save(user_spot_rating);
    }
}
