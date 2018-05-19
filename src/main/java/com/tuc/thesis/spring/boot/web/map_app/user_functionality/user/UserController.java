package com.tuc.thesis.spring.boot.web.map_app.user_functionality.user;

import com.sun.net.httpserver.Authenticator;
import com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_interest.User_Interest;
import com.tuc.thesis.spring.boot.web.map_app.user_functionality.user_interest.User_Interest_Service;
import com.tuc.thesis.spring.boot.web.map_app.image.AppImage;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    User_Interest_Service user_interest_service;

    @RequestMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping("/user/{username}")
    public User  getUser(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody User  user){
        if(userService.authenticateUser(user) != null){
            return new ResponseEntity<Authenticator.Success>(HttpStatus.OK);
        }
        return new ResponseEntity<Authenticator.Retry>(HttpStatus.ACCEPTED);

    }

    @RequestMapping(value = "/users/add", method = RequestMethod.POST)
    public HttpStatus addUser(@RequestBody User user){
        System.out.print(user);
        User user2 = userService.addUser(user);
        if(user2 != null) {
            return HttpStatus.OK;
        }else {
            return HttpStatus.FAILED_DEPENDENCY;
        }
    }

//    @RequestMapping(value = "/user-info/{username}", produces = "application/json")
//    public @ResponseBody
//    User getUserInfo(@PathVariable String username) throws JSONException {
//
//        User user =  userService.getUserInfo(username);
//
//        return user;
//
//    }

    @RequestMapping("/check-username-availability/{username}")
    public HttpStatus checkUsernameAvailability(@PathVariable String username){
        if(userService.checkUsenameAvailability(username) == null){
            return HttpStatus.OK;
        }
        return HttpStatus.CONFLICT;
    }
//    @RequestMapping(value = "/user/upload-profile-image/{username}", method = RequestMethod.POST)
//    public HttpStatus addUserImagePNG(@RequestPart("file") MultipartFile image, @PathVariable String username){
//
//        try {
//            byte[] byteImage;
//            byteImage = image.getBytes();
//            userService.uploadProfileImage(byteImage, username);
//            return HttpStatus.OK;
//        } catch (IOException e) {
//            e.printStackTrace();
//            return HttpStatus.FAILED_DEPENDENCY;
//        }
//
//
//    }
    @RequestMapping(value = "/user/upload-profile-image/{username}", method = RequestMethod.POST)
    public HttpStatus addUserImageJPEG(@RequestPart("file") byte[] image, @PathVariable String username){
        userService.uploadProfileImage(image, username);
        return HttpStatus.OK;



    }

    @RequestMapping("/check-old-password/{username}/{oldPassword}")
    public HttpStatus checkOldPassword(@PathVariable String username, @PathVariable String oldPassword){

        try {
            User user = userService.getUserInfo(username);
            if(user.getPassword().equals(oldPassword)){
                return HttpStatus.OK;
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }


        return HttpStatus.CONFLICT;
    }

    @RequestMapping(value = "/change-password/{username}", method = RequestMethod.POST)
    public HttpStatus changePassword(@PathVariable String username, @RequestBody String newPassword) {
        userService.changePassword(username, newPassword);
        return HttpStatus.OK;
    }

    @RequestMapping(value = "/get-user-image/{username}")
    public AppImage getUserImage(@PathVariable String username){
        return userService.getUserImage(username);
    }

    @RequestMapping(value = "/change-user-info", method = RequestMethod.POST)
    public HttpStatus changeUserInfo(@RequestBody User user) {
        userService.updateUserInfo(user);
        for (Iterator<User_Interest> items = user.getUser_interests().iterator(); items.hasNext();) {
            User_Interest item = items.next();
            if(item.getUser_interest_key().getUser_interest().equals("kitesurfing_remove")){

                user_interest_service.deleteKiteSurfing(item.getUser_interest_key().getUser_username());
            }
            if(item.getUser_interest_key().getUser_interest().equals("scuba-diving_remove")){
                user_interest_service.deleteScubaDiving(item.getUser_interest_key().getUser_username());
            }

        }
//        user_interest_service.updateUserInterests(user.getUser_interests());

        return HttpStatus.OK;
    }


}
