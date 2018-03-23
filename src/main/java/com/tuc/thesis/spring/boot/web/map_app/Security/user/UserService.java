package com.tuc.thesis.spring.boot.web.map_app.Security.user;
//sz
import com.tuc.thesis.spring.boot.web.map_app.Security.interest.InterestRepository;
import com.tuc.thesis.spring.boot.web.map_app.Security.user.User;
import com.tuc.thesis.spring.boot.web.map_app.Security.user.UserRepository;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void addUser(User  user) {
        userRepository.save(user);
    }

    public User getUserInfo() throws JSONException {
        User user = userRepository.getUserInfo();

        return user;



    }


}
