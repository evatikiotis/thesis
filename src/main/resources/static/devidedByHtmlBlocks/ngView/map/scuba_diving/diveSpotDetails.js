var module = angular.module('myApp');
module.controller('diveSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, FlashService) {


    var placeSpotDetails = function(data){
        $scope.spot=data;

    };
    var placeDiveSpotDetails = function(data){
        $scope.diveSpot = data;
    };

    var onError = function (reason) {
        console.log(reason);

    };

    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getDiveSpotDetails($stateParams.id).then(placeDiveSpotDetails, onError);
    }else {
        var cookie_spot_id = $cookies.get('spot_id');
        handleRequest.getSpot(cookie_spot_id).then(placeSpotDetails, onError);
        handleRequest.getDiveSpotDetails(cookie_spot_id).then(placeDiveSpotDetails, onError);

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



    };


});