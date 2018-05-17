//$rootScope.spot: apo markersController showInfo!!

var module = angular.module('myApp');
module.controller('navbarController', function($scope, $state, $rootScope, handleRequest) {
    // var nav_home = angular.element(document.querySelector('#nav_home'));
    // var nav_map = angular.element(document.querySelector('#nav_map'));
    // var nav_weatherMap = angular.element(document.querySelector('#nav_weatherMap'));
    // var nav_myMap = angular.element(document.querySelector('#nav_myMap'));
    // var nav_adventureFinder = angular.element(document.querySelector('#nav_adventureFinder'));
    // var nav_about = angular.element(document.querySelector('#nav_about'));
    //
    //
    //
    //
    // $scope.nav_home_clicked = function(){
    //     nav_home.addClass('active');
    //     nav_map.removeClass('active');
    //     nav_weatherMap.removeClass('active');
    //     nav_myMap.removeClass('active');
    //     nav_adventureFinder.removeClass('active');
    //     nav_about.removeClass('active');
    // };
    // $scope.nav_map_clicked = function(){
    //     nav_home.removeClass('active');
    //     nav_map.addClass('active');
    //     nav_weatherMap.removeClass('active');
    //     nav_myMap.removeClass('active');
    //     nav_adventureFinder.removeClass('active');
    //     nav_about.removeClass('active');
    //
    // };
    // $scope.nav_weatherMap_clicked = function(){
    //     nav_home.removeClass('active');
    //     nav_map.removeClass('active');
    //     nav_weatherMap.addClass('active');
    //     nav_myMap.removeClass('active');
    //     nav_adventureFinder.removeClass('active');
    //     nav_about.removeClass('active');
    // };
    // $scope.nav_myMap_clicked = function(){
    //     nav_home.removeClass('active');
    //     nav_map.removeClass('active');
    //     nav_weatherMap.removeClass('active');
    //     nav_myMap.addClass('active');
    //     nav_adventureFinder.removeClass('active');
    //     nav_about.removeClass('active');
    // };
    // $scope.nav_adventureFinder_clicked = function(){
    //     nav_home.removeClass('active');
    //     nav_map.removeClass('active');
    //     nav_weatherMap.removeClass('active');
    //     nav_myMap.removeClass('active');
    //     nav_adventureFinder.addClass('active');
    //     nav_about.removeClass('active');
    // };
    // $scope.nav_about_clicked = function(){
    //     nav_home.removeClass('active');
    //     nav_map.removeClass('active');
    //     nav_weatherMap.removeClass('active');
    //     nav_myMap.removeClass('active');
    //     nav_adventureFinder.removeClass('active');
    //     nav_about.addClass('active');
    // };


    $scope.reload = function(){
        $state.reload();
    };

    var placeSpotCategories = function(response){
        response.user_interests.map(function(interest){
            if(interest.user_interest_key.interest==="kitesurfing"){
                $rootScope.kitesurfing = true;
            }else if(interest.user_interest_key.interest==="scuba-diving"){
                $rootScope.scuba_diving = true;
                $rootScope.scuba_diving_schools = true;
                $rootScope.scuba_diving_spots = true;
            }
        })
    };
    var onError = function (reason) {
        console.log(reason);
    };

    if($rootScope.globals.currentUser){
        handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(placeSpotCategories,onError);
    }else{
        $rootScope.scuba_diving = true;
        $rootScope.scuba_diving_schools = true;
        $rootScope.scuba_diving_spots = true;
        $rootScope.kitesurfing = true;
    }






});

