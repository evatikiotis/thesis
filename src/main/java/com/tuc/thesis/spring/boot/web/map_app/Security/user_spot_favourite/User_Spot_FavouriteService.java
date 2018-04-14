package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import com.tuc.thesis.spring.boot.web.map_app.spot.Spot;
import com.tuc.thesis.spring.boot.web.map_app.spot.SpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

        //create actual object
        User_Spot_Favourite user_spot_favourite = new User_Spot_Favourite();
        user_spot_favourite.setUser_spot_favouriteCompositeKey(user_spot_favouriteCompositeKey);
        user_spot_favourite.setNotes(notes);
        user_spot_favouriteRepository.save(user_spot_favourite);
    }

    public List<User_Spot_Favourite> getFavouriteSpots(String username){
        return user_spot_favouriteRepository.selectFavouriteSpots(username);
    }

    public void editNotes(int spot_id, String username, String notes){
        user_spot_favouriteRepository.editNotes(spot_id, username, notes);
    }
}
