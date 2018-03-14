package com.tuc.thesis.spring.boot.web.map_app.spot;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SpotRepository extends CrudRepository<Spot, Integer> {


    @Query(value = "SELECT * FROM spot WHERE type='kiteSpot'",nativeQuery = true)
    public List<Spot> selectKiteSpots();
}
