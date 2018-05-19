package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user;

import com.tuc.thesis.spring.boot.web.map_app.image.AppImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Integer> {


    @Query(value = "SELECT * FROM app_user WHERE username= :username",nativeQuery = true)
    public User findByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM app_user WHERE username= :username AND password = :password",nativeQuery = true)
    public User authenticateUser(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT * FROM\n" +
            "  app_user\n" +
            "  WHERE username = :username", nativeQuery = true)
    public User getUserInfo(@Param("username") String username);

    @Query(value = "INSERT INTO app_user( username, password, email) " +
            "VALUES (:username, :password , :email)", nativeQuery = true)
    public User addUser(@Param("username") String username, @Param("password") String password, @Param("email") String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user SET profile_image = :image WHERE username = :username", nativeQuery = true)
    public void uploadProfileImage(@Param("image") byte[] image, @Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user SET password = :password WHERE username = :username", nativeQuery = true)
    public void changePassword(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT profile_image FROM app_user WHERE username= :username", nativeQuery = true)
    public AppImage getUserImage(@Param("username") String username);

}
