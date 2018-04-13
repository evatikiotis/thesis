package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class User_Spot_FavouriteService {

    @Autowired
    private User_Spot_FavouriteRepository user_spot_favouriteRepository;

    @Autowired
    private SpotRepository spotRepository;

    public void addSpotToFavourites(int spot_id, String username, String notes){
        //create object's composite key
        User_Spot_FavouriteCompositeKey user_spot_favouriteCompositeKey = new User_Spot_FavouriteCompositeKey();
        user_spot_favouriteCompositeKey.setSpot_id(spot_id);
        user_spot_favouriteCompositeKey.setUser_username(username);
        user_spot_favouriteCompositeKey.setNotes(notes);

        //create actual object
        User_Spot_Favourite user_spot_favourite = new User_Spot_Favourite();
        user_spot_favourite.setUser_spot_favouriteCompositeKey(user_spot_favouriteCompositeKey);
        user_spot_favouriteRepository.save(user_spot_favourite);
    }

    public List<Spot> getFavouriteSpots(String username){
        return spotRepository.selectFavouriteSpots(username);
    }
}
