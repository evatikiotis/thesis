package com.tuc.thesis.spring.boot.web.map_app.spot_comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Spot_CommentService {
    @Autowired
    Spot_CommentRepository spot_commentRepository;

    public void addComment(Spot_Comment spot_comment){
        spot_commentRepository.save(spot_comment);
    }

    public List<Spot_Comment> getComments(int spot_id){
        return spot_commentRepository.getComments(spot_id);
    }

}
