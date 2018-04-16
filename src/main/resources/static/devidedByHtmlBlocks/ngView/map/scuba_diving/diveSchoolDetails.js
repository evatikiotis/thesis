var module = angular.module('myApp');
module.controller('diveSchoolDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams) {



    var placeSpotDetails = function(data){
        $scope.spot = data;

    };

    var placeDiveSchoolDetails = function(data){
        $scope.scuba_diving_school = data;
    };
    var onError = function (reason) {
        console.log(reason);

    };

    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails,onError);
        handleRequest.getDiveSchoolDetails($stateParams.id).then(placeDiveSchoolDetails, onError);
    }else {
        var cookie_spot_id = $cookies.get('spot_id');
        handleRequest.getSpot(cookie_spot_id).then(placeSpotDetails, onError);
        handleRequest.getDiveSchoolDetails(cookie_spot_id).then(placeDiveSchoolDetails, onError);
    }

});