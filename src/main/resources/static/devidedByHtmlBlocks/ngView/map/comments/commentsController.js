var module = angular.module('myApp');
module.controller('commentsController', function( $scope, $rootScope, handleRequest) {
    $scope.usersImage = [];
    $scope.addComment = function(){
        handleRequest.addComment($rootScope.globals.currentUser.username, $rootScope.id, $scope.newComment)
            .then(function(response){
                if(response=="OK"){}
            })
    };

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

    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getComments($rootScope.id).then(placeComments, onError)



});