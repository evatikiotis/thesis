var module = angular.module('myApp');
module.controller('diveSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams) {


    var placeSpotDetails = function(data){
        $scope.spot=data;

    };
    var placeDiveSpotDetails = function(data){
        $scope.diveSpot = data;
    };

    var onError = function (reason) {
        console.log(reason);

    };

    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getDiveSpotDetails($stateParams.id).then(placeDiveSpotDetails, onError);
    }else {
        var cookie_spot_id = $cookies.get('spot_id');
        handleRequest.getSpot(cookie_spot_id).then(placeSpotDetails, onError);
        handleRequest.getDiveSpotDetails(cookie_spot_id).then(placeDiveSpotDetails, onError);

    }



});