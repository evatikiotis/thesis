(function () {


    var module = angular.module('myApp');
    module.factory('handleRequest', function ($http) {
        //spot
        var getSpots = function () {
            return $http.get("http://localhost:8080/spots")
                .then(function (response) {
                    return response.data;

                });
        };


        var getSpot = function(id){
            return $http.get("http://localhost:8080/spots/"+id)
                .then(function (response) {
                    return response.data;
                });
        };
        //kiteSpot
        var getKiteSpotDetails = function (id) {
            return $http.get("http://localhost:8080/spots/kite/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var getKiteSpotImages = function (id) {
            return $http.get("http://localhost:8080/spots/kite_image/"+id)
                .then(function (response) {
                    return response.data;
                });

        };

        var getDiveSpotDetails = function(id){
            return $http.get("http://localhost:8080/spots/scubadiving/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var getDiveSchoolDetails = function(id){
            return $http.get("http://localhost:8080/spots/scubadiving/school/"+id)
                .then(function (response) {
                    return response.data;
                });
        };



        return {
            getSpots: getSpots,
            getSpot: getSpot,
            getKiteSpotImages: getKiteSpotImages,
            getKiteSpotDetails: getKiteSpotDetails,
            getDiveSpotDetails: getDiveSpotDetails,
            getDiveSchoolDetails: getDiveSchoolDetails
        };





    });
}());