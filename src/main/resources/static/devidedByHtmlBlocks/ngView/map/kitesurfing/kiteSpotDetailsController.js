var module = angular.module('myApp');
module.controller('kiteSpotDetailsController', function($scope, $rootScope, handleRequest, NgMap, $cookies, $stateParams, FlashService) {
    // $rootScope.id = $stateParams.id;
    // var url = $location.absUrl().split('?')[0];
    var placeSpotDetails = function (data) {
        $scope.spot = data;
    };
    var placeKiteSpotDetails = function (data) {
        $scope.kiteSpot = data;
    };


    var placeKiteSpotImages = function(data){

        $scope.images = data;

    };

    /////////////////////
    var onError = function (reason) {
        console.log(reason);

    };
    if($stateParams.id) {

        handleRequest.getSpot($stateParams.id).then(placeSpotDetails, onError);
        handleRequest.getKiteSpotDetails($stateParams.id).then(placeKiteSpotDetails, onError);
        handleRequest.getKiteSpotImages($stateParams.id).then(placeKiteSpotImages, onError);

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



    // rating




});