package com.tuc.thesis.spring.boot.web.map_app.Security.user;

import com.sun.net.httpserver.Authenticator;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

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
        userService.addUser(user);
        return HttpStatus.OK;
    }

    @RequestMapping(value = "/user-info/{username}", produces = "application/json")
    public @ResponseBody
    User getUserInfo(@PathVariable String username) throws JSONException {

        User user =  userService.getUserInfo(username);

        return user;

    }




}