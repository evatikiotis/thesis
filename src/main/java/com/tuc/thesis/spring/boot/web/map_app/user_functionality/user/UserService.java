package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user;

import com.tuc.thesis.spring.boot.web.map_app.image.AppImage;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;



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

    public User checkUsenameAvailability(String username){
        return userRepository.findByUsername(username);

    }

    public User getUserInfo(String username) throws JSONException {
        User user = userRepository.getUserInfo(username);
        return user;
    }

    public void uploadProfileImage(byte[] image, String username){
//        ByteArrayInputStream bisImage = new ByteArrayInputStream(image);
        userRepository.uploadProfileImage(image, username);

    }

    public void changePassword(String username, String newPassword){
        userRepository.changePassword(username, newPassword);
    }

    public AppImage getUserImage(String username){
        return userRepository.getUserImage(username);
    }

    public void updateUserInfo(User user){
        userRepository.save(user);
    }


}
