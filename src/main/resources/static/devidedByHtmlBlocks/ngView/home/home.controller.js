(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$scope'];
    function HomeController(UserService, $rootScope, $scope) {
        var vm = this;
        $scope.types = "['address']";
        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;


        initController();
        $scope.placeChanged = function(){
            alert($scope.search_near_place);
        };
        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
        $scope.home_image_kite_clicked = function(){
            $rootScope.kitesurfing = true;
            $rootScope.scuba_diving_spots = false;
            $rootScope.scuba_diving_schools = false;
        };
        $scope.home_image_scuba_clicked = function(){
            $rootScope.scuba_diving_spots = true;
            $rootScope.scuba_diving_schools = true;
            $rootScope.kitesurfing = false;
        };
        $scope.home_image_all_clicked = function(){
            $rootScope.kitesurfing = true;
            $rootScope.scuba_diving_spots = true;
            $rootScope.scuba_diving_schools = true;
        };


    }


})();