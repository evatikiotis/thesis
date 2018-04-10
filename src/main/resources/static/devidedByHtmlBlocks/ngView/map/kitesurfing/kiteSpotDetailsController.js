var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies) {

    var placeSpotDetails = function (data) {
        $scope.spot = data;
    };
    var placeKiteSpotDetails = function (data) {
        $scope.kiteSpot = data;
    };


    var placeKiteSpotImages = function(data){

        $scope.images = data;

    };


    var onError = function (reason) {
        console.log(reason);

    };
    if($rootScope.id) {

        handleRequest.getSpot($rootScope.id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails($rootScope.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($rootScope.id).then(placeKiteSpotImages, onError);
    }else{
        var cookie_spot_id = $cookies.get('spot_id');
        handleRequest.getSpot(cookie_spot_id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails(cookie_spot_id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages(cookie_spot_id).then(placeKiteSpotImages, onError);
    }
});