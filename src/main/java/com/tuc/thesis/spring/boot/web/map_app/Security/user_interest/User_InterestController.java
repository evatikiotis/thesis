package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class User_InterestController {
    @Autowired
    private User_Interest_Service user_interest_service;

    @RequestMapping("/user/interests/{username}")
    public List<User_Interest> getAllSpots(@PathVariable String username){
        return user_interest_service.getInterests(username);
    }
}
