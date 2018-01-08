

var module = angular.module('myApp');
module.controller('leftColumnController', function($scope, $rootScope, $http) {
    $rootScope.markerClustering = false;
    $scope.toggleKiteSurfing = function(){
        $rootScope.kitesurfing = $scope.kitesurfing;
        $rootScope.placeMarkers();


    };
    $scope.toggleScubaSchools = function(){
        $rootScope.scuba_diving_schools = $scope.scuba_diving_schools;
        $rootScope.placeMarkers();
    };
    $scope.toggleScubaSpots = function(){
        $rootScope.scuba_diving_spots = $scope.scuba_diving_spots;
        $rootScope.placeMarkers();
    };
    $scope.toggleMarkerClustering = function () {
        $rootScope.markerClustering = $scope.markerClustering;
        $rootScope.placeMarkers();
    }


});
