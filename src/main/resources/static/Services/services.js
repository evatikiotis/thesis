(function () {

    // var server = "/adventurer";
    var server = "";


    var module = angular.module('myApp');
    module.factory('handleRequest', function ($http) {
        //spot
        var getSpots = function () {
            return $http.get(server+"/spots")
                .then(function (response) {
                    return response.data;

                });
        };
        var getKiteSpotImages = function (id) {
            return $http.get(server+"/spots/kite_image/"+id)
                .then(function (response) {
                    return response.data;
                });

        };
        var getKiteSurfingSpots = function () {
            return $http.get(server+"/spots/kitesurfing")
                .then(function (response) {
                    return response.data;
                });

        };

        var getSpot = function(id){
            return $http.get(server+"/spots/"+id)
                .then(function (response) {

                    return response.data;
                });
        };
        //kiteSpot
        var getKiteSpotDetails = function (id) {
            return $http.get(server+"/spots/kite/"+id)
                .then(function (response) {
                    return response.data;
                });
        };



        var getDiveSpotDetails = function(id){
            return $http.get(server+"/spots/scubadiving/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var getDiveSchoolDetails = function(id){
            return $http.get(server+"/spots/scubadiving/school/"+id)
                .then(function (response) {
                    return response.data;
                });
        };

        var addComment = function(username, spot_id, comment){
            return $http.post(server+"/add-comment/"+username+"/"+spot_id, comment)
                .then(function(response){
                    return response.data;
                });
        };

        var getComments = function(spot_id){
            return $http.get(server+"/get-comments/" + spot_id);
        };

        var getUserInfo = function (username){
            return $http.get(server+"/user/"+username)
                .then(function(response){
                    return response.data;
            })
        };

        var getUserInterests = function(username){
            return $http.get(server+"/user/interests/"+username)
                .then(function (response){
                    return response.data;
                })
        };
        var getUserImage = function(username){
            return $http.get(server+"/get-user-image/"+username)
                .then(function(response){
                    return response.data;
                })

        };
        var addSpotPersonalMap = function(spot_to_add_id, notes, username){
            return $http.post(server+"/add-spot-to-personal-map/"+spot_to_add_id + "/"+username, notes)
                .then(function(response){
                    return response.data;
                })
        };
        var addSpotPersonalMapWithoutNotes = function(spot_to_add_id, username){
            return $http.post(server+"/add-spot-to-personal-map-without-notes/"+spot_to_add_id + "/"+username)
                .then(function(response){
                    return response.data;
                })
        };

        var getFavouriteSpots = function(username){
            return $http.get(server+"/get-favourite-spots/"+username)
                .then(function(response){
                return response.data;
            })
        };

        var editNotes = function(spot_id_personalMap, spot_notes_personalMap, username){
            return $http.put(server+"/edit-notes-personal-map-spot/"+spot_id_personalMap + "/"+username, spot_notes_personalMap)
                .then(function(response){
                    return response.data;
                })
        };
        var getGuestRatingObject = function(spot_id){
            return $http.get(server+"/get-rating-object-guest/"+spot_id)
                .then(function(response){
                    return response.data;
                })
        };

        var getUserRatingObject = function (spot_id, username){
            return $http.get(server+"/get-rating-object-user/"+username+"/"+spot_id)
                .then(function(response){
                    return response.data;
                })

        };

        var userRateSpot = function(username, spot_id, rating){
            return $http.post(server+"/user-rate-spot/"+username+"/"+spot_id, rating)
                .then(function(response){
                    return response.data;
                })
        };
        var getScubaDivingSchoolsRecommendations = function(){
            return $http.get(server+"/get-scuba-diving-schools-recommendations")
                .then(function(response){
                    return response.data;
                })
        };
        var removeFromPersonalMap = function(remove_id, username){
            return $http.delete(server+"/remove-from-personal-map/"+remove_id+"/"+username)
                .then(function(response){
                    return response.data;
                })
        };
        var changeUserInfo = function(data){
            console.log(data);
            return $http.post(server+"/change-user-info",data)
                .then(function(response){
                    return response.data;
                });

        };

        var getSpotNames = function(data){
            console.log(data);
            return $http.get(server+"/spot-names")
                .then(function(response){
                    return response.data;
                });

        };
        var getScubaDivingSearchDTOs = function(data){
            // console.log(data);
            return $http.get(server+"/scuba-diving-dtos")
                .then(function(response){
                    return response.data;
                });
        };

        var getKitesurfingSearchDTOs = function(data){
            // console.log(data);
            return $http.get(server+"/get-kitesurfing-search-dtos")
                .then(function(response){
                    return response.data;
                });
        };
        var getScubaDivingSpotsSearchDTOs = function(data){
            // console.log(data);
            return $http.get(server+"/get-scuba-spots-search-dtos")
                .then(function(response){
                    return response.data;
                });
        };
        var getIfSpotExistsOnPersonalMap = function(spot_id, username){
            return $http.get(server+"/if-spot-exists-on-personal-map/"+spot_id+"/"+username)
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
            getSpotNames: getSpotNames,
            getScubaDivingSearchDTOs: getScubaDivingSearchDTOs,
            getKitesurfingSearchDTOs: getKitesurfingSearchDTOs,
            getScubaDivingSpotsSearchDTOs: getScubaDivingSpotsSearchDTOs,
            addSpotPersonalMapWithoutNotes: addSpotPersonalMapWithoutNotes,
            getIfSpotExistsOnPersonalMap: getIfSpotExistsOnPersonalMap

        };





    });
}());