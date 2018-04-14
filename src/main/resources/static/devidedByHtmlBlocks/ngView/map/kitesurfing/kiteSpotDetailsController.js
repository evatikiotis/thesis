var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, $location) {
    alert();
    $rootScope.id = $stateParams.id;
    // var url = $location.absUrl().split('?')[0];
    var url = $location.absUrl();
    alert(url);
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

    var placeSpotRating = function(response){
        vm.ratings = response.ratingsNumber;
        vm.averageRating = response.averageRating;
        vm.ratingsPosition = 'right';
        vm.formData = {
             myRating: 0
        };
    };

    vm.ratingChange = function() {
        console.log('My rating changed to: ' + vm.formData.myRating);
    };
    /////////////////////
    var onError = function (reason) {
        console.log(reason);

    };
    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails($stateParams.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($stateParams.id).then(placeKiteSpotImages, onError);
        handleRequest.getGuestRatingObject($stateParams.id).then(placeSpotRating, onError);
    }


    // rating




});