var module = angular.module('myApp');
module.controller('diveSchoolDetailsController', function($scope, $rootScope, handleRequest, NgMap) {

    var initDiveSchoolDetails = function () {
        handleRequest.getSpot($rootScope.id).then(placeSpotDetails,onError);
        handleRequest.getDiveSchoolDetails($rootScope.id).then(placeDiveSchoolDetails, onError);
        //handleRequest.getKiteSpotImages($rootScope.id).then(placeKiteSpotImages, onError);


    };

    var placeSpotDetails = function(data){
        $scope.spot = data;

    };

    var placeDiveSchoolDetails = function(data){
        $scope.scuba_diving_school = data;
    };
    var onError = function (reason) {
        console.log(reason);

    };

    initDiveSchoolDetails();
});