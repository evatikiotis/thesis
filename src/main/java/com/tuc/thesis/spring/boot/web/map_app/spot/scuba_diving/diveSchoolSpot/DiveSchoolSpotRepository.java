package com.tuc.thesis.spring.boot.web.map_app.spot.scuba_diving.diveSchoolSpot;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DiveSchoolSpotRepository extends CrudRepository<DiveSchoolSpot, Integer> {

    @Query(value = "SELECT * FROM spot_dive_school JOIN(\n" +
            "  SELECT * FROM (spot JOIN (\n" +
            "      SELECT app_user_spot_rating.spot_id, AVG(rating)*COUNT(rating) as multiplication FROM app_user_spot_rating\n" +
            "      GROUP BY app_user_spot_rating.spot_id) as foo\n" +
            "    ON spot_id = spot.id)) as foo2\n" +
            "ON foo2.spot_id=spot_dive_school.spot_id", nativeQuery = true)
    public List<DiveSchoolSpot> getScubaSchoolsRecommendations();


}
