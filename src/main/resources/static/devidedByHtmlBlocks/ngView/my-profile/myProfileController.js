var module = angular.module('myApp');
module.controller('myProfileController', function($rootScope, handleRequest, UserService, $scope, fileReader) {
    vm = this;



    var placeUserinfo = function(data){
        vm.user = data;
    };

    var placeUserInterests = function(data){
        // for(var i=0; i<data.length; i++) {
        //     vm.interests.push(data[i].user_interest_key.user_interest)
        //
        // }
        vm.interests = data;
    };

    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(placeUserinfo, onError);
    handleRequest.getUserInterests($rootScope.globals.currentUser.username).then(placeUserInterests, onError);
});