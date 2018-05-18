var module = angular.module('myApp');
module.controller('diveSchoolDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, FlashService, $state) {

    $scope.existsOnPersonalMap = false;

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

    $scope.addSpotToPersonal = function(){

        if($scope.notes) {
            handleRequest.addSpotPersonalMap($stateParams.id, $scope.notes, $rootScope.globals.currentUser.username)
                .then(function (response) {
                    if (response == "OK") {

                        FlashService.Success('Spot added to personal map successfully', false);

                        // $window.location.reload();
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }else{
            handleRequest.addSpotPersonalMapWithoutNotes($stateParams.id, $rootScope.globals.currentUser.username)
                .then(function (response) {
                    if (response == "OK") {
                        FlashService.Success('Spot added to personal map successfully', false);
                        // $window.location.reload();
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    };

    $scope.closedModalPM = function(){
        $scope.notes = "";
        FlashService.clearFlashMessage();
        $state.reload();



    };
    var placeFavourites = function (reponse) {
        $scope.existsOnPersonalMap = reponse;
    };

    if($rootScope.globals.currentUser) {
        handleRequest.getIfSpotExistsOnPersonalMap($stateParams.id, $rootScope.globals.currentUser.username)
            .then(placeFavourites, onError);
    }

});