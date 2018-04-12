(function () {


    var module = angular.module('myApp');
    module.factory('handleRequest', function ($http) {
        //spot
        var getSpots = function () {
            return $http.get("/spots")
                .then(function (response) {
                    return response.data;

                });
        };
        var getKiteSpotImages = function (id) {
            return $http.get("/spots/kite_image/"+id)
                .then(function (response) {
                    return response.data;
                });

        };
        var getKiteSurfingSpots = function () {
            return $http.get("/spots/kitesurfing")
                .then(function (response) {
                    return response.data;
                });

        };








        var getSpot = function(id){
            return $http.get("/spots/"+id)
                .then(function (response) {

                    return response.data;
                });
        };
        //kiteSpot
        var getKiteSpotDetails = function (id) {
            return $http.get("/spots/kite/"+id)
                .then(function (response) {
                    return response.data;
                });
        };



        var getDiveSpotDetails = function(id){
            return $http.get("/spots/scubadiving/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var getDiveSchoolDetails = function(id){
            return $http.get("/spots/scubadiving/school/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var addComment = function(username, spot_id, comment){
            return $http.post("/add-comment/"+username+"/"+spot_id, comment);
        };

        var getComments = function(spot_id){
            return $http.get("/get-comments/" + spot_id);
        }

        var getUserInfo = function (username){
            return $http.get("/user/"+username)
                .then(function(response){
                    return response.data;
            })
        };

        var getUserInterests = function(username){
            return $http.get("/user/interests/"+username)
                .then(function (response){
                    return response.data;
                })
        };
        var getUserImage = function(username){
            return $http.get("/get-user-image/"+username)
                .then(function(response){
                    return response.data;
                })

        };
        var addSpotPersonalMap = function(spot_to_add_id){
            return $http.get("/add-spot-to-personal-map/"+spot_to_add_id)
                .then(function(response){
                    return response.data;
                })
        };



        return {
            getSpots: getSpots,
            getKiteSurfingSpots: getKiteSurfingSpots,
            getSpot: getSpot,
            getKiteSpotImages: getKiteSpotImages,
            getKiteSpotDetails: getKiteSpotDetails,
            getDiveSpotDetails: getDiveSpotDetails,
            getDiveSchoolDetails: getDiveSchoolDetails,
            getUserInfo: getUserInfo,
            getUserInterests: getUserInterests,
            addComment: addComment,
            getComments: getComments,
            getUserImage: getUserImage,
            addSpotPersonalMap: addSpotPersonalMap

        };





    });
}());