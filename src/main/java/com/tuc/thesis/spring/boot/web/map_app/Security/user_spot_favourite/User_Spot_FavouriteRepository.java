package com.tuc.thesis.spring.boot.web.map_app.Security.user_spot_favourite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface User_Spot_FavouriteRepository extends JpaRepository<User_Spot_Favourite, User_Spot_FavouriteCompositeKey> {
    @Query(value = "SELECT * FROM " +
                "spot JOIN app_user_spot_favourite ON spot_id = spot.id " +
                "WHERE user_username = :username", nativeQuery = true)
    public List<User_Spot_Favourite> selectFavouriteSpots(@Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user_spot_favourite SET notes = :notes\n" +
            "      WHERE user_username = :username AND spot_id = :spot_id", nativeQuery = true)
    public void editNotes(@Param("spot_id") int spot_id, @Param("username") String username, @Param("notes") String notes);


    @Modifying
    @Transactional
    @Query(value = "DELETE FROM app_user_spot_favourite WHERE user_username = :username AND spot_id = :spot_id", nativeQuery = true)
    public void removeFromPersonalMap(@Param("spot_id") int spot_id, @Param("username") String username);

    @Query(value = "SELECT\n" +
            "  CASE WHEN EXISTS (SELECT * FROM app_user_spot_favourite WHERE spot_id = :spot_id AND user_username= :username ) THEN TRUE\n" +
            "  WHEN NOT EXISTS (SELECT * FROM app_user_spot_favourite WHERE spot_id = :spot_id AND user_username=:username) THEN FALSE END",nativeQuery = true)
    public boolean getIfSpotExistsOnPersonalMap(@Param("spot_id") int spot_id, @Param("username") String username);
}
