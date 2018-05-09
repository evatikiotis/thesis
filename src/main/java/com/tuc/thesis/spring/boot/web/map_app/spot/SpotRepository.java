package com.tuc.thesis.spring.boot.web.map_app.spot;

import com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolRatingsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SpotRepository extends JpaRepository<Spot, Integer> {

    @Query(value = "SELECT * FROM spot WHERE type='kiteSpot'",nativeQuery = true)
    public List<Spot> selectKiteSpots();

    @Query(value = "SELECT * FROM spot WHERE (spot.id IN \n" +
                        "(SELECT spot_id FROM app_user_spot_favourite " +
                                "WHERE user_username = :username)" +
                        ")",nativeQuery = true)
    public List<Spot> selectFavouriteSpots(@Param("username") String username);

    @Query(value = "SELECT name FROM spot WHERE type='scuba-diving_school'", nativeQuery = true)
    public List<String> getAllSpotNames();

    @Query(value="SELECT * FROM spot", nativeQuery = true)
    public List<Spot> getAllSpots();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolRatingsDTO" +
            "( s.id ,  s.name, AVG(usr.rating), COUNT(usr.rating)) FROM " +
            " Spot as s  " +
            " JOIN s.diveSchoolSpot as dss" +
            " JOIN s.user_spot_ratings as usr"+
            " WHERE dss.id = s.id AND usr.user_spot_ratingKey.spot_id = s.id " +
            " group by s.id")
    public List<ScubaDivingSchoolRatingsDTO> getScubaDivingSchoolRatingsDTOS();
}
