(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope','AuthenticationService', 'FlashService' ];
    function RegisterController(UserService, $location, $rootScope, FlashService, $scope, AuthenticationService) {

        var vm = this;
        // vm.interests=[];
        vm.register = register;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        var AuthenticateNewUser = function(){
            AuthenticationService.Login(vm.user.username, vm.user.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }


        function register() {

            vm.dataLoading = true;
            // vm.user.interests = vm.interests
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response == "OK") {
                        FlashService.Success('Registration successful', true);
                        AuthenticateNewUser();



                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });


        }

        vm.pushUserInterest = function(interest){
            vm.interests.push(interest);

        }
    }

})();
