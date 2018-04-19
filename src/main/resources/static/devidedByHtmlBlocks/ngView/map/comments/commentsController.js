var module = angular.module('myApp');
module.controller('commentsController', function( $scope, $rootScope, handleRequest, $cookies, $state, FlashService) {
    $scope.usersImage = [];
    cc= this;

    if(angular.isDefined($rootScope.globals.currentUser)) {
        handleRequest.getUserImage($rootScope.globals.currentUser.username)
            .then(function (response) {
                $scope.currentUserImage = response.image;
            });
    }
    var placeComments = function(response){
        $scope.comments = response.data;
        for(i=0; i<$scope.comments.length; i++){
            handleRequest.getUserImage($scope.comments[i].spot_comment_key.user_username)
                .then(function(response){
                    // return response.image;
                    $scope.usersImage.push(response.image);

                })
        }


    };

    // $scope.getUserImage = function(username){
    //     handleRequest.getUserImage(username)
    //         .then(function(response){
    //             $scope.userImage= response.image;
    //         })
    //
    // };

    cc.addComment = function(){
        handleRequest.addComment($rootScope.globals.currentUser.username, $rootScope.id, cc.new_comment)
            .then(function(response){
                if(response=="OK"){
                    $state.reload();
                }else{
                    FlashService.Error("Oops, something unexpected happened. Please try again", false);
                }
            })
    };

    var onError = function (reason) {
        console.log(reason);
    };
    if($rootScope.id) {
        handleRequest.getComments($rootScope.id).then(placeComments, onError)
    }else{
        var cookie_spot_id = $cookies.get('spot_id');
        handleRequest.getComments(cookie_spot_id).then(placeComments, onError)
    }



});