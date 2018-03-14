package com.tuc.thesis.spring.boot.web.map_app.Security;

import com.sun.net.httpserver.Authenticator;
import com.tuc.thesis.spring.boot.web.map_app.Security.User;
import com.tuc.thesis.spring.boot.web.map_app.Security.UserService;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @RequestMapping("/user/{username}")
    public User getUser(@PathVariable String username){
        return userService.getUser(username);
    }

//    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
//    public Map<String, String> authenticateUser(@RequestBody User user){
//        HashMap<String, String> response = new HashMap<>();
//        if(userService.authenticateUser(user) != null){
//            response.put("success", "'true'");
//        }else{
//            response.put("success", "'false'");
//            response.put("message", "Username or password is incorrect");
//        }
//        return response;
//    }
    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody User user){
        if(userService.authenticateUser(user) != null){
            return new ResponseEntity<Authenticator.Success>(HttpStatus.OK);
        }
        return new ResponseEntity<Authenticator.Retry>(HttpStatus.ACCEPTED);

    }

//    @RequestMapping("/users/kitesurfing")
//    public List<User> getKiteUsers(){return userService.getKiteUsers();}

    @RequestMapping(value = "/users/add", method = RequestMethod.POST)
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

//    @RequestMapping("/users/{id}")
//    public User getUser(@PathVariable int id){
//        return userService.getUser(id);
//    }


}
