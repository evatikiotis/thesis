package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class User_Spot_FavouriteController {
    @Autowired
    private User_Spot_FavouriteService user_spot_favouriteService;

    @RequestMapping(value = "/add-spot-to-personal-map/{spot_id}/{username}", method = RequestMethod.POST)
    public HttpStatus addSpotToFavourites(@PathVariable int spot_id, @PathVariable String username, @RequestBody String notes ){
        User_Spot_Favourite user_spot_favourite = new User_Spot_Favourite();

        user_spot_favouriteService.addSpotToFavourites(spot_id, username, notes);
        return HttpStatus.OK;


    }

}
