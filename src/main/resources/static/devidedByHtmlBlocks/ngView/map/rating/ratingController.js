var module = angular.module('myApp');

app.controller('ratingController', function($rootScope, handleRequest, $state, $stateParams){
    ///////////////rating

    var rc = this;
    rc.formData = {
        myRating: 0
    };

    var placeGuestRating = function(response){
        rc.ratings = response.ratingsNumber;
        rc.averageRating = response.averageRating;
        rc.ratingsPosition = 'right';
        rc.formData = {
            myRating: 0
        };
    };

    var placeUserRating = function(response){
        rc.ratings = response.ratingsNumber;
        rc.averageRating = response.averageRating;
        rc.ratingsPosition = 'right';
        rc.userRating = response.userRating;
        rc.formData = {
            myRating: 0
        };
    };

    rc.ratingChange = function() {
        console.log('My rating changed to: ' + rc.formData.myRating);
        rc.userRating = rc.formData.myRating;
        handleRequest.userRateSpot($rootScope.globals.currentUser.username, $stateParams.id, rc.formData.myRating);
        $state.reload();
    };

    var onError = function (reason) {
        console.log(reason);

    };

    if ($rootScope.globals.currentUser) {
        handleRequest.getUserRatingObject($stateParams.id, $rootScope.globals.currentUser.username).then(placeUserRating, onError);
    } else {
        handleRequest.getGuestRatingObject($stateParams.id).then(placeGuestRating, onError);
    }

});