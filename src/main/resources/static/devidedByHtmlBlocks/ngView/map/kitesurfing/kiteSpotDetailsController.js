var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, $state) {
    // $rootScope.id = $stateParams.id;
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

    /////////////////////
    var onError = function (reason) {
        console.log(reason);

    };
    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails($stateParams.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($stateParams.id).then(placeKiteSpotImages, onError);

    }


    // rating




});