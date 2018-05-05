package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface User_interest_Repository extends CrudRepository<User_Interest, User_Interest_CompositeKey> {
    @Query(value = "SELECT * FROM app_user_interest WHERE user_username= :username",nativeQuery = true)
    public List<User_Interest> getInterests(@Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM app_user_interest WHERE " +
            "(user_username= :username AND (interest = 'kitesurfing' OR interest = 'kitesurfing_remove'))", nativeQuery = true)
    public void deleteKiteSurfing(@Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM app_user_interest WHERE " +
            "(user_username= :username AND (interest = 'scuba-diving' OR interest = 'scuba-diving_remove'))", nativeQuery = true)
    public void deleteScubaDiving(@Param("username") String username);
}
