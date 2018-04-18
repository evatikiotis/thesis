

var module = angular.module('myApp');
module.controller('leftColumnController', function($scope, $rootScope) {

    // $rootScope.kitesurfing = false;
    // $rootScope.scuba_diving=false;
    // $rootScope.scuba_diving_schools=false;
    // $rootScope.scuba_diving_spots=false;

    $rootScope.markerClustering = false;
    $scope.toggleKiteSurfing = function(){
        $rootScope.kitesurfing = $scope.kitesurfing;
        // spotsModel.setKiteSurfingSpotsModel();
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
    };
    $scope.toggleScubaDiving = function(){
        if($scope.scuba_diving == true){
            $scope.scuba_diving_spots = true;
            $scope.scuba_diving_schools = true;
            $rootScope.scuba_diving_spots = true;
            $rootScope.scuba_diving_schools = true;
            $rootScope.placeMarkers();
        }
        if($scope.scuba_diving == false){
            $scope.scuba_diving_spots = false;
            $scope.scuba_diving_schools = false;
            $rootScope.scuba_diving_spots = false;
            $rootScope.scuba_diving_schools = false;
            $rootScope.placeMarkers();
        }
    };
    $scope.toggleAll = function(){
        if($scope.all == true) {
            $rootScope.kitesurfing = true;
            $rootScope.scuba_diving = true;
            $rootScope.scuba_diving_schools = true;
            $rootScope.scuba_diving_spots = true;
            $scope.kitesurfing = true;
            $scope.scuba_diving = true;
            $scope.scuba_diving_schools = true;
            $scope.scuba_diving_spots = true;
            $rootScope.placeMarkers();
        }else{
            $rootScope.kitesurfing = false;
            $rootScope.scuba_diving = false;
            $rootScope.scuba_diving_schools = false;
            $rootScope.scuba_diving_spots = false;
            $scope.kitesurfing = false;
            $scope.scuba_diving = false;
            $scope.scuba_diving_schools = false;
            $scope.scuba_diving_spots = false;
            $rootScope.placeMarkers();

        }
    }



});