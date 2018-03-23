(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService, $scope) {
        var vm = this;
        vm.interests=[];
        vm.register = register;

        function register() {

            vm.dataLoading = true;
            vm.user.interests = vm.interests
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
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
