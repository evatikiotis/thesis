var module = angular.module('myApp');
app.controller('adventureFinderController', function($scope, handleRequest) {


    var placeScubaDivingSearchDTO = function(response){
        $scope.search_dtos = response;
    };

    var placeKitesurfingSearchDTO =function(response){
        $scope.search_dtos = response;
    };
    var placeScubaSpotSearchDTO = function(response){
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
    var dataLoaded = function(){
        $scope.dataLoading = false;
    };

    $scope.getScubaSchoolSearchDTOs = function(){

        $scope.dataLoading = true;
        $scope.search_dtos=[];
        handleRequest.getScubaDivingSearchDTOs().then(placeScubaDivingSearchDTO, onError).then(dataLoaded,onError);
    };
    $scope.getKitesurfingSearchDTOs = function(){
        $scope.search_dtos=[];
        handleRequest.getKitesurfingSearchDTOs().then(placeKitesurfingSearchDTO, onError).then(dataLoaded,onError);
    };
    $scope.getScubaSpotSearchDTOs = function(){
        $scope.dataLoading = true;

        $scope.search_dtos=[];
        handleRequest.getScubaDivingSpotsSearchDTOs().then(placeKitesurfingSearchDTO, onError).then(dataLoaded,onError);
    };
    // handleRequest.getScubaDivingSearchDTO().then(placeScubaDivingSearchDTO, onError);
    // handleRequest.getKitesurfingSearchDTO().then(placeKitesurfingSearchDTO, onError)
    // handleRequest.getScubaDivingSchoolsRecommendations().then(placeScubaDivingSchoolsRecommendations, onError);
    // handleRequest.getSpotNames().then(placeSearchValues,onError);

});