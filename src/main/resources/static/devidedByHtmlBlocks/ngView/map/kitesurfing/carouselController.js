(function() {
    var module = angular.module('myApp');
    module.controller('carouselController', function($scope, $rootScope) {

        this.myFunction = function() {
            alert("Iam from angular controller");
        }
        this.externalJSFunction = myFunction

        carouselController.$inject = ['myFunction'];

    function myFunctionFactory($window) {
        if (!$window.myFunction) {
            throw new Error("myFunction is not defined");
        }
        this.myFunction = $window.myFunction;
        /* You can add
         $window.myFunction = undefined;
         if the function ($window.myFunction) is not required by
         some other library or function in window scope
         in such cases it gives added security by
         restricting access of this from window scope and dis allows modification
         */
        return this.myFunction;
    }
    myFunction.$inject = ['$window'];

    var app = angular.module("app", []);
    app.controller('exampleController', exampleController);
    app.factory('myFunction', myFunctionFactory);

})();

function myFunction() {
    alert("Iam from javascript");
}
})