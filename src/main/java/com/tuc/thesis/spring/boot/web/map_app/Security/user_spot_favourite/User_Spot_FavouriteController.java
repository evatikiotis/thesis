package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @RequestMapping("/get-favourite-spots/{username}")
    public List<User_Spot_Favourite> getFavouriteSpots(@PathVariable String username){
        return user_spot_favouriteService.getFavouriteSpots((username));
    }

    @RequestMapping(value = "/edit-notes-personal-map-spot/{spot_id}/{username}", method = RequestMethod.PUT)
    public HttpStatus editNotes(@PathVariable int spot_id, @PathVariable String username, @RequestBody String notes ){
        User_Spot_Favourite user_spot_favourite = new User_Spot_Favourite();

        user_spot_favouriteService.editNotes(spot_id, username, notes);
        return HttpStatus.OK;


    }

    @RequestMapping(value = "/remove-from-personal-map/{spot_id}/{username}", method = RequestMethod.DELETE)
    public HttpStatus removeFromPersonalMap(@PathVariable int spot_id, @PathVariable String username){


        user_spot_favouriteService.removeFromPersonalMap(spot_id, username);
        return HttpStatus.OK;


    }
}
