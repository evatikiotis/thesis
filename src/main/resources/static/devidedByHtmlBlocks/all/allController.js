//$rootScope.spot: apo markersController showInfo!!

var module = angular.module('myApp');
module.controller('allController', function($scope, $rootScope) {
    // alert();
    var angular_ngView = angular.element(document.querySelector("#angular_ngView"));
    // angular_ngView.addClass('col-sm-10');
    var contentExpand = 1;


    // $rootScope.toggleLeftColumn = function () {
    //     if(contentExpand == 1){
    //         angular_ngView.removeClass('offset-sm-0')
    //         angular_ngView.addClass('offset-sm-2');
    //          // $rootScope.resizeMainMap();
    //         contentExpand = 0;
    //     }else{
    //         angular_ngView.removeClass('offset-sm-2')
    //         angular_ngView.addClass('offset-sm-0');
    //          // $rootScope.resizeMainMap();
    //         contentExpand = 1;
    //     }
    // };




});

