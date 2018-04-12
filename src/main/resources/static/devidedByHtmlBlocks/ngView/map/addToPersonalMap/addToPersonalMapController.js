var module = angular.module('myApp');
module.controller('addToPersonalMapController', function($scope, $window) {
    alert($window.localStorage.getItem("spot_id"));
    $scope.$watch(function () { return $localStorage.something; },function(newVal,oldVal){
        if(oldVal!==newVal && newVal === undefined){
            console.log('It is undefined');
        }
    })
    // $scope.$watch($window.sessionStorage.getItem("spot_id"),function(value){
    //     $scope.id = value;
    // })
    // $scope.$watch(function() {
    //     return angular.toJson($sessionStorage);
    // }, function() {
    //     $scope.counter = $sessionStorage.counter;
    // });

});