package com.tuc.thesis.spring.boot.web.map_app.Security;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {


    @Query(value = "SELECT * FROM app_user WHERE username= :username",nativeQuery = true)
    public User findByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM app_user WHERE username= :username AND password = :password",nativeQuery = true)
    public User authenticateUser(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT * FROM\n" +
            "      app_user\n" +
            "      JOIN app_user_interest\n" +
            "      ON app_user.username = app_user_interest.app_user_username\n" +
            "      JOIN interest\n" +
            "        ON app_user_interest.interest_id = interest.id", nativeQuery = true)

    public User getUserInfo();
}
