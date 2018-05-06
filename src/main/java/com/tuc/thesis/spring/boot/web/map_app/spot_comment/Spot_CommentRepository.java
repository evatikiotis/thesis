package com.tuc.thesis.spring.boot.web.map_app.spot_comment;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Spot_CommentRepository extends CrudRepository <Spot_Comment, Spot_Comment_CompositeKey> {

//    @Query(value = "SELECT * FROM spot_comment WHERE spot_id = :spot_id", nativeQuery = true)
//    public List<Spot_Comment> getComments(@Param("spot_id")  int spot_id);

    @Query(value = "SELECT * FROM spot_comment JOIN app_user ON spot_comment.user_username = app_user.username WHERE spot_id= :spot_id", nativeQuery = true)
    public List<Spot_Comment> getComments(@Param("spot_id")  int spot_id);

}
