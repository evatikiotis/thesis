package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface User_Spot_FavouriteRepository extends CrudRepository<User_Spot_Favourite, User_Spot_FavouriteCompositeKey> {
    @Query(value = "SELECT * FROM " +
                "spot JOIN app_user_spot_favourite ON spot_id = spot.id " +
                "WHERE user_username = :username", nativeQuery = true)
    public List<User_Spot_Favourite> selectFavouriteSpots(@Param("username") String username);

}
