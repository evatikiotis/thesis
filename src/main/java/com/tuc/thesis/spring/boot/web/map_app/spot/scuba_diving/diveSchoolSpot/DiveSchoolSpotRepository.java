package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DiveSchoolSpotRepository extends JpaRepository<DiveSchoolSpot, Integer> {

    @Query(value = "SELECT * FROM spot_dive_school JOIN(\n" +
            "  SELECT * FROM (spot JOIN (\n" +
            "      SELECT app_user_spot_rating.spot_id, AVG(rating)*COUNT(rating) as multiplication FROM app_user_spot_rating\n" +
            "      GROUP BY app_user_spot_rating.spot_id) as foo\n" +
            "    ON spot_id = spot.id)) as foo2\n" +
            "ON foo2.spot_id=spot_dive_school.spot_id", nativeQuery = true)
    public List<DiveSchoolSpot> getScubaSchoolsRecommendations();
//
//    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolRatingsDTO" +
//            "( s.id ,  dss.email) FROM " +
//            " DiveSchoolSpot as dss  " +
//            " JOIN dss.spot as s" +
//            " WHERE dss.id = s.id ")
//    public List<ScubaDivingSchoolRatingsDTO> getScubaDivingSchoolRatingsDTOS();


}
