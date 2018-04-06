var module = angular.module('myApp');
module.controller('myProfileController', function($rootScope, handleRequest, UserService, $scope, fileReader) {
    vm = this;
    $scope.types = "['establishment']";


    var placeUserinfo = function(data){
        vm.user = data;
    };

    var placeUserInterests = function(data){
        vm.interests = data;
        for(var i=0; i<vm.interests.length; i++) {
            if(vm.interests[i].user_interest_key.user_interest == "kitesurfing"){
                vm.kitesurfing = "kitesurfing";
                vm.kitesurfing_level = "'vm.interests[i].level'";
            }
            if (vm.interests[i].user_interest_key.user_interest == "scuba-diving") {
                vm.scubadiving = "scubadiving";

                vm.scubadiving_level = vm.interests[i].level;
            }
        }
    }



    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(placeUserinfo, onError);
    handleRequest.getUserInterests($rootScope.globals.currentUser.username).then(placeUserInterests, onError);
});