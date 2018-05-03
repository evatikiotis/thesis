package com.tuc.thesis.spring.boot.web.map_app.Security.user_interest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class User_Interest_Service  {
    @Autowired
    private User_interest_Repository user_interest_repository;

    public List<User_Interest> getInterests(String username){
        return (List<User_Interest>) user_interest_repository.getInterests(username);
    }
    public void updateUserInterests(List<User_Interest> user_interests){

        user_interest_repository.save(user_interests);
    }
}
