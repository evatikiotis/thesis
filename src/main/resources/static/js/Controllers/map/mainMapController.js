// initMainMap >> buildMarkers >> markerOnclick onclick open info window and place photos if they exist
var module = angular.module('myApp');
module.controller('mainMapController', function( $scope, $rootScope, NgMap, handleRequest) {

    var kiteSpotMarkers = [];
    var scubaSchoolsMarkers = [];
    var scubaSiteMarkers = [];

    var mmc = this;
    mmc.mainMap = null;
    var markerClusterer = null;
    var infoWin = new google.maps.InfoWindow();


    var initMainMap = function () {

        var latlng = new google.maps.LatLng(37.378306, 23.642578);
        var options = {
            'zoom': 6,
            'center': latlng,
            'mapTypeId': google.maps.MapTypeId.HYBRID
        };

        mmc.mainMap = new google.maps.Map(document.getElementById('mainMap'), options);
        markerClusterer = new MarkerClusterer(mmc.mainMap, [], {});
        handleRequest.getSpots().then(buildMarkers, onError).then($rootScope.placeMarkers);
    };


    var buildMarkers = function (data) {
        var spots = data;


        spots.map(function (spot) {
            if (spot.type == "kiteSpot") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var marker = new google.maps.Marker({
                    position: latLng

                });
                google.maps.event.addListener(marker, 'click', function (evt) {


                    $scope.spot = spot;
                    handleRequest.getKiteSpotImages(spot.id).then(placePhotos, onError);
                    infoWin.setContent("kitesurfing spot" + "<br >" + spot.name +"<br>"+
                        "<a href='#!/map/kiteSpotDetails'>details</a>");
                    $rootScope.id = spot.id;
                    infoWin.open(mmc.mainMap, marker);
                });

                kiteSpotMarkers.push(marker);
            }
            if (spot.type == "scuba-diving_school") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var marker = new google.maps.Marker({
                    position: latLng

                });
                google.maps.event.addListener(marker, 'click', function (evt) {
                    infoWin.setContent("scuba-diving school" + "<br >" + spot.name+"<br> " +
                        "<a href='#!/map/scubadiving/school'>details</a>");
                    infoWin.open(mmc.mainMap, marker);
                    $rootScope.id = spot.id;
                });
                scubaSchoolsMarkers.push(marker);
            }
            if (spot.type == "scuba-diving_spot") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var marker = new google.maps.Marker({
                    position: latLng

                });

                google.maps.event.addListener(marker, 'click', function (evt) {
                    infoWin.setContent("scuba-diving site" + "<br >" + spot.name +
                        "<br> <a href='#!/map/scubaSpotDetails'>details</a>");
                    infoWin.open(mmc.mainMap, marker);
                    $rootScope.id = spot.id;

                });
                scubaSiteMarkers.push(marker);
            }

        });


    };
    var placePhotos = function (data) {

        // var kiteSpotImage = data;
        var kiteSpotImages = data;
        if(kiteSpotImages.length>0) {
            infoWin.setContent("kitesurfing spot" + "<br >" + $scope.spot.name + "<br>" +
                "<img alt='kitesurfing spot Image' src='data:image/png;base64," +
                kiteSpotImages[0].image + "' height=110px; width: 110px;>" + "<br>" +
                "<a href='#!/map/kiteSpotDetails'>details</a>");

        }

    };


    $rootScope.placeMarkers = function () {
        if ($rootScope.markerClustering == false) {
            markerClusterer.clearMarkers();
            if ($rootScope.kitesurfing == true) {
                // var markerCluster = new MarkerClusterer(mmc.mainMap, kiteSpotMarkers, {});
                for (i = 0; i < kiteSpotMarkers.length; i++) {
                    kiteSpotMarkers[i].setMap(mmc.mainMap);
                }
            } else {
                for (i = 0; i < kiteSpotMarkers.length; i++) {
                    kiteSpotMarkers[i].setMap(null);
                }
            }
            if ($rootScope.scuba_diving_schools == true) {
                // var markerCluster = new MarkerClusterer(mmc.mainMap, kiteSpotMarkers, {});
                for (i = 0; i < scubaSchoolsMarkers.length; i++) {
                    scubaSchoolsMarkers[i].setMap(mmc.mainMap);
                }
            } else {
                for (i = 0; i < scubaSchoolsMarkers.length; i++) {
                    scubaSchoolsMarkers[i].setMap(null);
                }
            }
            if ($rootScope.scuba_diving_spots == true) {
                // var markerCluster = new MarkerClusterer(mmc.mainMap, kiteSpotMarkers, {});
                for (i = 0; i < scubaSiteMarkers.length; i++) {
                    scubaSiteMarkers[i].setMap(mmc.mainMap);
                }
            } else {
                for (i = 0; i < scubaSiteMarkers.length; i++) {
                    scubaSiteMarkers[i].setMap(null);
                }
            }
        } else {
            var mergedMarkers = [];
            if ($rootScope.kitesurfing == true) {
                mergedMarkers = mergedMarkers.concat(kiteSpotMarkers);
            }
            if ($rootScope.scuba_diving_schools == true) {
                mergedMarkers = mergedMarkers.concat(scubaSchoolsMarkers);
            }
            if ($rootScope.scuba_diving_spots == true) {
                mergedMarkers = mergedMarkers.concat(scubaSiteMarkers);
            }


            markerClusterer.addMarkers(mergedMarkers);
        }
    };


    var onError = function (reason) {
        console.log(reason);

    };


    initMainMap();

});