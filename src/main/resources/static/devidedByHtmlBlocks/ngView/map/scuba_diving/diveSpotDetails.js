var module = angular.module('myApp');
module.controller('diveSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap) {

    var initDiveSpotDetails = function () {
        handleRequest.getSpot($rootScope.id).then(placeSpotDetails, onError);
        handleRequest.getDiveSpotDetails($rootScope.id).then(placeDiveSpotDetails, onError);
        //handleRequest.getKiteSpotImages($rootScope.id).then(placeDiveSpotImages, onError);

    };
    var placeSpotDetails = function(data){
        $scope.spot=data;

    };
    var placeDiveSpotDetails = function(data){
        $scope.diveSpot = data;
    };

    var onError = function (reason) {
        console.log(reason);

    };
    initDiveSpotDetails();

});