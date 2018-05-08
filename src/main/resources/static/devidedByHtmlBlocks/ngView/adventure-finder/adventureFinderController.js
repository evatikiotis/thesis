var module = angular.module('myApp');
app.controller('adventureFinderController', function($scope, handleRequest) {

    var placeScubaDivingSchoolsRecommendations = function(response){
        $scope.schools = response;
    };
    var onError = function (reason) {
        console.log(reason);
    };
    var placeSearchValues = function(response){
        $scope.items = response;
    };

    handleRequest.getScubaDivingSchoolsRecommendations().then(placeScubaDivingSchoolsRecommendations, onError);
    handleRequest.getSpotNames().then(placeSearchValues,onError);
});