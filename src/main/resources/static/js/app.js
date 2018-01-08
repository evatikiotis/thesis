

    var app = angular.module('myApp', ['ngRoute', 'ngMap']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "html/home/home.html"

            })
            .when("/map", {
                templateUrl: "html/map/map.html",
                controller: "mainMapController"

            })
            .when("/map/kiteSpotDetails",{
                templateUrl: "html/map/kitesurfing/kitespotDetails.html",
                controller: "kiteSpotDetailsController"
            })
            .when("/map/scubaSpotDetails",{
                templateUrl: "html/map/scuba_diving/diveSpotDetails.html",
                controller: "diveSpotDetailsController"
            })
            .when("/map/scubadiving/school",{
                templateUrl: "html/map/scuba_diving/diveSchoolDetails.html",
                controller: "diveSchoolDetailsController"
            })

            .when("/weather_map",{
                templateUrl: "html/toDevelop/weather_map.html"

            })
            .when("/my_map",{
                templateUrl: "html/toDevelop/my_map.html"

            })
            .when("/adventure_finder",{
                templateUrl: "html/toDevelop/adventure_finder.html"

            })
            .when("/about",{
                templateUrl: "html/toDevelop/about.html"

            })
             .otherwise({redirectTo: "/home"});
    });
