var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap) {

    var initKiteSpotDetails = function () {
        handleRequest.getSpot($rootScope.id).then(placeSpotDetails,onError);
        handleRequest.getKiteSpotDetails($rootScope.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($rootScope.id).then(placeKiteSpotImages, onError);

    };
    var placeSpotDetails = function (data) {
        $scope.spot = data;
    };
    var placeKiteSpotDetails = function (data) {
        $scope.kiteSpot = data;
    };

    // var initKiteSpotImages = function(){
    //     handleRequest.getKiteSpotImages($rootScope.id).then(placeKiteSpotImages, onError);
    // };
    var placeKiteSpotImages = function(data){

        $scope.images = data;

    };
    // var initSpotWindDetails = function(){
    //     handleRequest.getSpotWindDetails().then(placeSpotWindDetails, onError);
    // }
    //
    // var placeSpotWindDetails = function(data){
    //     alert(data);
    // };

    var onError = function (reason) {
        console.log(reason);

    };
    initKiteSpotDetails();
    // initSpotWindDetails();
    // initKiteSpotImages();
});