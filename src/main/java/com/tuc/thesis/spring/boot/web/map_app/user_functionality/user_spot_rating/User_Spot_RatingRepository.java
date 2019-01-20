package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_spot_rating;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface User_Spot_RatingRepository extends JpaRepository<User_Spot_Rating, User_Spot_RatingCompositeKey> {

    @Query(value = "SELECT AVG(rating) FROM app_user_spot_rating\n" +
            "    WHERE spot_id = :spot_id ", nativeQuery = true)
    public float selectAverageRating(@Param("spot_id") int spot_id);

    @Query(value = "SELECT COUNT(rating) FROM app_user_spot_rating\n" +
            "    WHERE spot_id = :spot_id ", nativeQuery = true)
    public int selectCountRating(@Param("spot_id") int spot_id);

    @Query(value = "SELECT rating FROM app_user_spot_rating\n" +
            "    WHERE spot_id = :spot_id AND user_username= :username", nativeQuery = true)
    public int selectUserRating(@Param("username") String username, @Param("spot_id") int spot_id);


    @Query(value = "SELECT AVG(rating) FROM app_user_spot_rating WHERE app_user_spot_rating.spot_id = :spot_id", nativeQuery = true)
    public Double getAverageRating(@Param("spot_id") int spot_id);

    @Query(value = "SELECT COUNT(rating) FROM app_user_spot_rating WHERE app_user_spot_rating.spot_id = :spot_id", nativeQuery = true)
    public Long getNumberOfRatings(@Param("spot_id") int spot_id);

}
