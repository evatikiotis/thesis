package com.tuc.thesis.spring.boot.web.map_app.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository  userRepository;

    public List<User > getAllUsers() {
        List<User > users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User  getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public User  authenticateUser(User  user){
        return userRepository.authenticateUser(user.getUsername(), user.getPassword());
    }

//    public List<User> getKiteUsers() {
//        List<User> users = new ArrayList<>();
//        userRepository.selectKiteUsers().forEach(users::add);
//        return users;
//    }

    public void addUser(User  user) {
        userRepository.save(user);
    }

//    public User getUser(int id) {
//        return userRepository.findOne(id);
//    }
}
