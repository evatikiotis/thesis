//$rootScope.spot: apo markersController showInfo!!

var module = angular.module('myApp');
module.controller('navbarController', function($scope, $location) {
    var nav_home = angular.element(document.querySelector('#nav_home'));
    var nav_map = angular.element(document.querySelector('#nav_map'));
    var nav_weatherMap = angular.element(document.querySelector('#nav_weatherMap'));
    var nav_myMap = angular.element(document.querySelector('#nav_myMap'));
    var nav_adventureFinder = angular.element(document.querySelector('#nav_adventureFinder'));
    var nav_about = angular.element(document.querySelector('#nav_about'));




    $scope.nav_home_clicked = function(){
        nav_home.addClass('active');
        nav_map.removeClass('active');
        nav_weatherMap.removeClass('active');
        nav_myMap.removeClass('active');
        nav_adventureFinder.removeClass('active');
        nav_about.removeClass('active');
    };
    $scope.nav_map_clicked = function(){
        nav_home.removeClass('active');
        nav_map.addClass('active');
        nav_weatherMap.removeClass('active');
        nav_myMap.removeClass('active');
        nav_adventureFinder.removeClass('active');
        nav_about.removeClass('active');

    };
    $scope.nav_weatherMap_clicked = function(){
        nav_home.removeClass('active');
        nav_map.removeClass('active');
        nav_weatherMap.addClass('active');
        nav_myMap.removeClass('active');
        nav_adventureFinder.removeClass('active');
        nav_about.removeClass('active');
    };
    $scope.nav_myMap_clicked = function(){
        nav_home.removeClass('active');
        nav_map.removeClass('active');
        nav_weatherMap.removeClass('active');
        nav_myMap.addClass('active');
        nav_adventureFinder.removeClass('active');
        nav_about.removeClass('active');
    };
    $scope.nav_adventureFinder_clicked = function(){
        nav_home.removeClass('active');
        nav_map.removeClass('active');
        nav_weatherMap.removeClass('active');
        nav_myMap.removeClass('active');
        nav_adventureFinder.addClass('active');
        nav_about.removeClass('active');
    };
    $scope.nav_about_clicked = function(){
        nav_home.removeClass('active');
        nav_map.removeClass('active');
        nav_weatherMap.removeClass('active');
        nav_myMap.removeClass('active');
        nav_adventureFinder.removeClass('active');
        nav_about.addClass('active');
    };





});

