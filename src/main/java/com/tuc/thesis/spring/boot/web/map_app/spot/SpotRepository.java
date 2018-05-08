package com.tuc.thesis.spring.boot.web.map_app.spot;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SpotRepository extends CrudRepository<Spot, Integer> {

    @Query(value = "SELECT * FROM spot WHERE type='kiteSpot'",nativeQuery = true)
    public List<Spot> selectKiteSpots();

    @Query(value = "SELECT * FROM spot WHERE (spot.id IN \n" +
                        "(SELECT spot_id FROM app_user_spot_favourite " +
                                "WHERE user_username = :username)" +
                        ")",nativeQuery = true)
    public List<Spot> selectFavouriteSpots(@Param("username") String username);

    @Query(value = "SELECT name FROM spot WHERE type='scuba-diving_school'")
    public List<String> getAllSpotNames();

}
