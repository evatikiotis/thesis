package com.tuc.thesis.spring.boot.web.map_app.Security;

import com.sun.net.httpserver.Authenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService  userService;

    @RequestMapping("/users")
    public List<User > getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping("/user/{username}")
    public User  getUser(@PathVariable String username){
        return userService.getUser(username);
    }

    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody User  user){
        if(userService.authenticateUser(user) != null){
            return new ResponseEntity<Authenticator.Success>(HttpStatus.OK);
        }
        return new ResponseEntity<Authenticator.Retry>(HttpStatus.ACCEPTED);

    }

    @RequestMapping(value = "/users/add", method = RequestMethod.POST)
    public void addUser(@RequestBody User  user){
        userService.addUser(user);
    }




}
