package com.tuc.thesis.spring.boot.web.map_app.spot;

import com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolSearchDTO;
import com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.KiteSpot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
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

//    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolRatingsDTO" +
//            "( s.id ,  s.name, s.type, COALESCE(usr.rating,0) )" +
////            "COALESCE(AVG(usr.rating),0), COUNT(usr.rating)) " +
//            " from Spot as s  " +
//            "   left outer join  s.user_spot_ratings as usr " +
//            " inner join s.user_spot_ratings as usr2 " +
//
////            "   join s.user_spot_favourites fav"+
//            " where (usr.user_spot_ratingKey.spot_id = s.id)" +
////            "OR usr.user_spot_ratingKey.spot_id IS null )" +
////            "   AND(fav.user_spot_favouriteCompositeKey.spot_id = s.id or fav.user_spot_favouriteCompositeKey.spot_id IS NULL) " +
//            " AND (s.type='scuba-diving_school')"+
//
//            " group by s.id,usr.rating")
//    public List<ScubaDivingSchoolRatingsDTO> getScubaDivingSchoolRatingsDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='scuba-diving_school')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getScubaDivingSchoolRatingsDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='kiteSpot')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getKitesurfingSearchDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.recommendations.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='scuba-diving_spot')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getScubaSpotsSearchDTOS();
}
