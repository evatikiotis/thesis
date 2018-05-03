var module = angular.module('myApp');
module.controller('myProfileController', function($rootScope, handleRequest, UserService, $scope, $state) {
    vm = this;
    $scope.types = "['address']";
    vm.attention = false;

     vm.user = [];

    var placeUserinfo = function(data){
        vm.user = data;
        if(vm.user.user_interests.length > 0) {
            if (vm.user.user_interests[0].user_interest_key.interest === "scuba-diving") {
                //we have a problem: first interest must be kitesurfing

                if (vm.user.user_interests[1] && vm.user.user_interests[1].user_interest_key.interest === "kitesurfing") {
                    //swap!
                    var temp = [];
                    temp = vm.user.user_interests[0];
                    vm.user.user_interests[0] = vm.user.user_interests[1];
                    vm.user.user_interests[1] = temp;
                } else {
                    vm.attention = true;
                }
            }

            vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            if (vm.user.user_interests.length === 2) {
                vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            }
        }

    };

    // var placeUserInterests = function(data){
    //     vm.interests = data;
    //
    //
    //    for(var i=0; vm.interests.length;i++){
    //        if(!vm.user.user_interests[i].user_interest_key.interest === "kitesurfing" && i===0){
    //
    //        }
    //    }
    // };
    vm.changeInfo = function(){
        alert();
        vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
        if (vm.user.user_interests.length === 2) {
            vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
        }
        handleRequest.changeUserInfo(vm.user);
    };



    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(placeUserinfo, onError);
    // handleRequest.getUserInterests($rootScope.globals.currentUser.username).then(placeUserInterests, onError);
    $scope.reload = function(){
        $state.reload();
    };
});