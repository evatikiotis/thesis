var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap) {

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
    handleRequest.getSpot($rootScope.id).then(placeSpotDetails,onError);
    handleRequest.getKiteSpotDetails($rootScope.id).then(placeKiteSpotDetails, onError);
    handleRequest.getKiteSpotImages($rootScope.id).then(placeKiteSpotImages, onError);

});