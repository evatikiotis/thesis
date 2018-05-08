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
            return $http.post("/add-comment/"+username+"/"+spot_id, comment)
                .then(function(response){
                    return response.data;
                });
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
        var addSpotPersonalMap = function(spot_to_add_id, notes, username){
            return $http.post("/add-spot-to-personal-map/"+spot_to_add_id + "/"+username, notes)
                .then(function(response){
                    return response.data;
                })
        };

        var getFavouriteSpots = function(username){
            return $http.get("/get-favourite-spots/"+username)
                .then(function(response){
                return response.data;
            })
        };

        var editNotes = function(spot_id_personalMap, spot_notes_personalMap, username){
            return $http.put("/edit-notes-personal-map-spot/"+spot_id_personalMap + "/"+username, spot_notes_personalMap)
                .then(function(response){
                    return response.data;
                })
        };
        var getGuestRatingObject = function(spot_id){
            return $http.get("/get-rating-object-guest/"+spot_id)
                .then(function(response){
                    return response.data;
                })
        };

        var getUserRatingObject = function (spot_id, username){
            return $http.get("/get-rating-object-user/"+username+"/"+spot_id)
                .then(function(response){
                    return response.data;
                })

        };

        var userRateSpot = function(username, spot_id, rating){
            return $http.post("/user-rate-spot/"+username+"/"+spot_id, rating)
                .then(function(response){
                    return response.data;
                })
        };
        var getScubaDivingSchoolsRecommendations = function(){
            return $http.get("/get-scuba-diving-schools-recommendations")
                .then(function(response){
                    return response.data;
                })
        };
        var removeFromPersonalMap = function(remove_id, username){
            return $http.delete("/remove-from-personal-map/"+remove_id+"/"+username)
                .then(function(response){
                    return response.data;
                })
        };
        var changeUserInfo = function(data){
            console.log(data);
            return $http.post("/change-user-info",data)
                .then(function(response){
                    return response.data;
                });

        };

        var getSpotNames = function(data){
            console.log(data);
            return $http.get("/spot-names")
                .then(function(response){
                    return response.data;
                });

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
            addSpotPersonalMap: addSpotPersonalMap,
            getFavouriteSpots: getFavouriteSpots,
            editNotes: editNotes,
            getGuestRatingObject: getGuestRatingObject,
            getUserRatingObject: getUserRatingObject,
            userRateSpot: userRateSpot,
            getScubaDivingSchoolsRecommendations: getScubaDivingSchoolsRecommendations,
            removeFromPersonalMap:removeFromPersonalMap,
            changeUserInfo: changeUserInfo,
            getSpotNames: getSpotNames

        };





    });
}());