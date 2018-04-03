package com.tuc.thesis.spring.boot.web.map_app.Security.user;
//sz
import com.tuc.thesis.spring.boot.web.map_app.Security.interest.InterestRepository;
import com.tuc.thesis.spring.boot.web.map_app.Security.user.User;
import com.tuc.thesis.spring.boot.web.map_app.Security.user.UserRepository;
import org.hibernate.jpa.event.internal.core.JpaPostInsertEventListener;
import org.hibernate.jpa.event.internal.core.JpaSaveOrUpdateEventListener;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private InterestRepository interestRepository;

    public List<User> getAllUsers() {
        List<User > users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User  getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User  authenticateUser(User  user){
        return userRepository.authenticateUser(user.getUsername(), user.getPassword());
    }

    public User addUser(User  user) {
        User user2 = userRepository.save(user);
//        user.getUsername(), user.getPassword(), user.getEmail());
        return user2;

    }

    public HttpStatus checkUsenameAvailability(String username){
        if(userRepository.findByUsername(username) != null){
            return HttpStatus.OK;
        }
        return HttpStatus.CONFLICT;
    }

    public User getUserInfo(String username) throws JSONException {
        User user = userRepository.getUserInfo(username);

        return user;



    }


}
