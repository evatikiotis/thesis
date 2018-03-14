package com.tuc.thesis.spring.boot.web.map_app.spot.kitesurfing.kiteSpot.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface KiteSpotImageRepository extends JpaRepository<KiteSpotImage, Integer> {

    @Query(value = "SELECT * FROM spot_kitesurfing_image WHERE kite_spot_id= :id",nativeQuery = true)
    public List<KiteSpotImage> find(@Param("id") int id);


//    @Query(value = "" ,nativeQuery = true)
//    public KiteSpotImage getImage(@Param("id") int id, @Param("row") int row);

}
