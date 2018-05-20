(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', '$scope', '$rootScope', 'handleRequest'];
    function LoginController($location, AuthenticationService, FlashService, $scope, $rootScope, handleRequest) {
        var vm = this;

        var placeSpotCategories = function (response) {
            // $rootScope.scuba_diving = true;
            $rootScope.scuba_diving_schools = false;
            $rootScope.scuba_diving_spots = false;
            $rootScope.kitesurfing = false;
            response.user_interests.map(function(interest){
                if(interest.user_interest_key.interest==="kitesurfing"){
                    $rootScope.kitesurfing = true;
                }else if(interest.user_interest_key.interest==="scuba-diving"){
                    $rootScope.scuba_diving = true;
                    $rootScope.scuba_diving_schools = true;
                    $rootScope.scuba_diving_spots = true;
                }
            });
            $location.path('/');
        };

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        var onError = function (reason) {
            console.log(reason);
        };

        vm.login = function() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    handleRequest.getUserInfo(vm.username).then(placeSpotCategories,onError);
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    // $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            })
            // handleRequest.getUserInfo(vm.username).then(placeSpotCategories,onError);
        };

    }

})();
