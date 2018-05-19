var module = angular.module('myApp');
app.controller('adventureFinderController', function($scope, handleRequest, $rootScope) {

    $rootScope.from_breadcrumb = "spot-finder";
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
    $scope.only_interest_scuba = false;
    var navigateFinder = function(response){
        if(response.user_interests.length ==1 ){
            if(response.user_interests[0].user_interest_key.interest==="scuba-diving"){
                $scope.only_interest_scuba = true;
            }

        }
    };

    ratingsPosition = 'right';

    if($rootScope.globals.currentUser){
        handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(navigateFinder,onError);
    }
    // handleRequest.getScubaDivingSearchDTO().then(placeScubaDivingSearchDTO, onError);
    // handleRequest.getKitesurfingSearchDTO().then(placeKitesurfingSearchDTO, onError)
    // handleRequest.getScubaDivingSchoolsRecommendations().then(placeScubaDivingSchoolsRecommendations, onError);
    // handleRequest.getSpotNames().then(placeSearchValues,onError);

});