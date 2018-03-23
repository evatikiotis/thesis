package com.tuc.thesis.spring.boot.web.map_app.Security.interest;

import com.tuc.thesis.spring.boot.web.map_app.Security.interest.Interest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface InterestRepository extends CrudRepository<Interest, Integer> {
    @Query(value = "SELECT * FROM\n" +
            "      app_user\n" +
            "      JOIN app_user_interest\n" +
            "      ON app_user.username = app_user_interest.app_user_username\n" +
            "      JOIN interest\n" +
            "        ON app_user_interest.interest_id = interest.id", nativeQuery = true)

    public Interest getUserInfo();
}
