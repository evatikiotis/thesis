package com.tuc.thesis.spring.boot.web.map_app.Security.user;

import ch.qos.logback.core.db.dialect.SQLDialect;
import com.tuc.thesis.spring.boot.web.map_app.Security.user.User;
import org.hibernate.jpa.event.internal.core.JpaPostInsertEventListener;
import org.hibernate.jpa.event.internal.core.JpaSaveOrUpdateEventListener;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLOutput;

public interface UserRepository extends JpaRepository<User, Integer> {


    @Query(value = "SELECT * FROM app_user WHERE username= :username",nativeQuery = true)
    public User findByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM app_user WHERE username= :username AND password = :password",nativeQuery = true)
    public User authenticateUser(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT * FROM\n" +
            "  app_user\n" +
            "  JOIN app_user_interest\n" +
            "    ON app_user.username = app_user_interest.user_username\n" +
            "  WHERE username = :username", nativeQuery = true)
    public User getUserInfo(@Param("username") String username);

    @Query(value = "INSERT INTO app_user( username, password, email) " +
            "VALUES (:username, :password , :email)", nativeQuery = true)
    public User addUser(@Param("username") String username, @Param("password") String password, @Param("email") String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user SET profile_image = :image WHERE username = :username", nativeQuery = true)
    public void uploadProfileImage(@Param("image") byte[] image, @Param("username") String username);
}
