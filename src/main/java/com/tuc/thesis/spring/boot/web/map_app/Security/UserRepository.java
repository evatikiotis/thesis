package com.tuc.thesis.spring.boot.web.map_app.Security;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Integer> {


    @Query(value = "SELECT * FROM app_user WHERE username= :username",nativeQuery = true)
    public User findByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM app_user WHERE username= :username AND password = :password",nativeQuery = true)
    public User authenticateUser(@Param("username") String username, @Param("password") String password);
}
