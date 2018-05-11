var module = angular.module('myApp');
app.controller('adventureFinderController', function($scope, handleRequest) {

    // $scope.friends =[{sno:1, name:'Sourabh Somani', Marks:'75'},
    //     {sno:2, name:'Shaili Dashora', Marks:'90'},
    //     {sno:3, name:'Divya Sharma', Marks:'89'},
    //     {sno:4, name:'Swati Soni', Marks:'78'},
    //     {sno:5, name:'Ankit', Marks:'74'}];

    var placeScubaDivingSearchDTO = function(response){
        $scope.search_dtos = response;
    };

    var placeKitesurfingSearchDTO =function(response){
        $scope.search_dtos = response;
    };

    var placeScubaDivingSchoolsRecommendations = function(response){
        $scope.schools = response;
    };
    var onError = function (reason) {
        console.log(reason);
    };
    var placeSearchValues = function(response){
        $scope.items = response;
    };

    $scope.getScubaSchoolSearchDTO = function(){
        handleRequest.getScubaDivingSearchDTO().then(placeScubaDivingSearchDTO, onError);
    };
    $scope.getKitesurfingSearchDTO = function(){
        handleRequest.getKitesurfingSearchDTO().then(placeKitesurfingSearchDTO, onError);
    };
    // handleRequest.getScubaDivingSearchDTO().then(placeScubaDivingSearchDTO, onError);
    // handleRequest.getKitesurfingSearchDTO().then(placeKitesurfingSearchDTO, onError)
    // handleRequest.getScubaDivingSchoolsRecommendations().then(placeScubaDivingSchoolsRecommendations, onError);
    // handleRequest.getSpotNames().then(placeSearchValues,onError);

});