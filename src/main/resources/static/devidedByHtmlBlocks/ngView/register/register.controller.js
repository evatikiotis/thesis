(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope','AuthenticationService', 'FlashService' ];
    function RegisterController(UserService, $location, $rootScope, AuthenticationService, FlashService, $scope) {

        var vm = this;
        // vm.interests=[];
        vm.register = register;

        vm.pushUserInterest = function(interest){
            vm.interests.push(interest);

        };

        var AuthenticateNewUser = function(){
            vm.dataLoading = true;
            AuthenticationService.Login(vm.user.username, vm.user.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.user.username, vm.user.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };


        function register() {

            vm.dataLoading = true;
            // vm.user.interests = vm.interests
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response == "OK") {
                        FlashService.Success('Registration successful', true);
                        AuthenticateNewUser();
                        // $rootScope.globals.currentUser.username = vm.user.username;




                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });


        }


    }

})();
