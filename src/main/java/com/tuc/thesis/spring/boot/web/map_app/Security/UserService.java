package com.tuc.thesis.spring.boot.web.map_app.Security;
//sz
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository  userRepository;

    @Autowired
    private InterestRepository  interestRepository;

    public List<User > getAllUsers() {
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

    public void addUser(User  user) {
        userRepository.save(user);
    }

    public User getUserInfo() throws JSONException {
        User user = userRepository.getUserInfo();

        return user;



    }


}
