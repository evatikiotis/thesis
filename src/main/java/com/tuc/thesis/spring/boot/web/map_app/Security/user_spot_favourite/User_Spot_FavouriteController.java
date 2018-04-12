package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class User_Spot_FavouriteController {
    @RequestMapping("/add-spot-to-personal-map/{spot_id}")
    public void addSpotToFavourites(@PathVariable int spot_id){
        System.out.println(spot_id);


    }
}
