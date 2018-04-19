package com.tuc.thesis.spring.boot.web.map_app.spot_comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;


@RestController
public class Spot_CommentController {

    @Autowired
    private Spot_CommentService spot_commentService;

    @RequestMapping(value = "/add-comment/{username}/{spot_id}", method = RequestMethod.POST)
    public HttpStatus addComment(@PathVariable String username, @PathVariable int spot_id, @RequestBody String comment){
        System.out.println();
        Spot_Comment_CompositeKey spot_comment_compositeKey = new Spot_Comment_CompositeKey();
        spot_comment_compositeKey.setComment(comment);
        spot_comment_compositeKey.setSpot_id(spot_id);
        spot_comment_compositeKey.setUser_username(username);
        Spot_Comment spot_comment = new Spot_Comment();
        spot_comment.setSpot_comment_key(spot_comment_compositeKey);

        long millis=System.currentTimeMillis();
        java.sql.Date date=new java.sql.Date(millis);
        spot_comment.setDate(date);
        spot_commentService.addComment(spot_comment);
        return HttpStatus.OK;
        
    }

    @RequestMapping("/get-comments/{spot_id}")
    public List<Spot_Comment> getComments(@PathVariable int spot_id){
        return spot_commentService.getComments(spot_id);
    }
}
