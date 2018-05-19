package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class User_Spot_RatingController {
    @Autowired User_Spot_RatingService user_spot_ratingService;

    @RequestMapping("/get-rating-object-guest/{spot_id}")
    public RatingObject getRatingObject_guest(@PathVariable int spot_id){
        return user_spot_ratingService.getRatingObject_guest(spot_id);
    }

    @RequestMapping("/get-rating-object-user/{username}/{spot_id}")
    public RatingObject getRatingObject_user(@PathVariable String username, @PathVariable int spot_id){
        return user_spot_ratingService.getRatingObject_user(username, spot_id);
    }

    @RequestMapping(value ="/user-rate-spot/{username}/{spot_id}")
    public HttpStatus userRateSpot(@PathVariable String username, @PathVariable int spot_id, @RequestBody int rating){
        user_spot_ratingService.userRateSpot(username, spot_id, rating);
        return HttpStatus.OK;
    }
}
