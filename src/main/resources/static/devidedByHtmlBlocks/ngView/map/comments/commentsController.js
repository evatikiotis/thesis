var module = angular.module('myApp');
module.controller('commentsController', function( $scope, $rootScope, handleRequest, $stateParams, $state, FlashService) {
    $scope.usersImage = [];
    $scope.currentUserImage = null;
    cc= this;

    if(angular.isDefined($rootScope.globals.currentUser)) {
        handleRequest.getUserImage($rootScope.globals.currentUser.username)
            .then(function (response) {
                $scope.currentUserImage = response.image;
            });
    }
    var placeComments = function(response){
        $scope.comments = response.data;
        

    };

    // $scope.getUserImage = function(username){
    //     handleRequest.getUserImage(username)
    //         .then(function(response){
    //             $scope.userImage= response.image;
    //         })
    //
    // };

    cc.addComment = function(){
        handleRequest.addComment($rootScope.globals.currentUser.username, $stateParams.id, cc.new_comment)
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
    if($stateParams.id) {
        handleRequest.getComments($stateParams.id).then(placeComments, onError)
    }



});