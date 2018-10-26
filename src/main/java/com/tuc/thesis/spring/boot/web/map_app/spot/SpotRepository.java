package com.tuc.thesis.spring.boot.web.map_app.spot;

import com.tuc.thesis.spring.boot.web.map_app.spot_search.ScubaDivingSchoolSearchDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

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


    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.spot_search.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='scuba-diving_school')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getScubaDivingSchoolRatingsDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.spot_search.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='kiteSpot')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getKitesurfingSearchDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.spot_search.ScubaDivingSchoolSearchDTO" +
            "( s.id ,  s.name, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            "and  (s.type='scuba-diving_spot')"+
            " group by s.id")
    public List<ScubaDivingSchoolSearchDTO> getScubaSpotsSearchDTOS();

    @Query("SELECT new com.tuc.thesis.spring.boot.web.map_app.spot.Spot_RatingsDTO" +
            "( s.id ,  s.name, s.latitude, s.longitude, s.type, COALESCE(avg(usr.rating),0), count(usr.rating))" +
            " from Spot as s  " +
            "  left join  s.user_spot_ratings as usr " +
            " where (s.id = usr.user_spot_ratingKey.spot_id or usr.user_spot_ratingKey.spot_id is null) " +
            " group by s.id")
    public List<Spot_RatingsDTO> getSpot_RatingsDTO();

    @Query(value = "SELECT * FROM spot " +
            "WHERE (LOWER(spot.name) LIKE LOWER(CONCAT('%',:searchTerm,'%')) OR " +
            "LOWER(spot.address) LIKE LOWER(CONCAT('%',:searchTerm,'%'))) " +
            "AND spot.type LIKE :spotType", nativeQuery = true)
    public List<Spot> getSearchResults(@Param("searchTerm") String searchTerm, @Param("spotType") String spotType);


}
