var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, $state) {
    $rootScope.id = $stateParams.id;
    // var url = $location.absUrl().split('?')[0];
    var placeSpotDetails = function (data) {
        $scope.spot = data;
    };
    var placeKiteSpotDetails = function (data) {
        $scope.kiteSpot = data;
    };


    var placeKiteSpotImages = function(data){

        $scope.images = data;

    };
    ///////////////rating

    var vm = this;
    vm.formData = {
        myRating: 0
    };

    var placeGuestRating = function(response){
        vm.ratings = response.ratingsNumber;
        vm.averageRating = response.averageRating;
        vm.ratingsPosition = 'right';
        vm.formData = {
             myRating: 0
        };
    };

    var placeUserRating = function(response){
        vm.ratings = response.ratingsNumber;
        vm.averageRating = response.averageRating;
        vm.ratingsPosition = 'right';
        vm.userRating = response.userRating;
        vm.formData = {
            myRating: 0
        };
    };

    vm.ratingChange = function() {
        console.log('My rating changed to: ' + vm.formData.myRating);
        vm.userRating = vm.formData.myRating;
        handleRequest.userRateSpot($rootScope.globals.currentUser.username, $stateParams.id, vm.formData.myRating);
        $state.reload();
    };
    /////////////////////
    var onError = function (reason) {
        console.log(reason);

    };
    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails($stateParams.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($stateParams.id).then(placeKiteSpotImages, onError);
        if ($rootScope.globals.currentUser) {
            handleRequest.getUserRatingObject($stateParams.id, $rootScope.globals.currentUser.username).then(placeUserRating, onError);
        } else {
            handleRequest.getGuestRatingObject($stateParams.id).then(placeGuestRating, onError);
        }
    }


    // rating




});