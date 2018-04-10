// initMainMap >> buildMarkers >> markerOnclick onclick open info window and place photos if they exist
var module = angular.module('myApp');
module.controller('mainMapController', function( $scope, $rootScope, NgMap, handleRequest, $cookies) {

    var kiteSpotMarkers = [];
    var scubaSchoolsMarkers = [];
    var scubaSiteMarkers = [];

    var mmc = this;
    mmc.mainMap = null;
    // var markerClusterer = null;
    var infoWin = new google.maps.InfoWindow();
    var latlng = new google.maps.LatLng(37.378306, 23.642578);
    var options = {
        'id': 'mainMap',
        'zoom': 6,
        'center': latlng,
        'mapTypeId': google.maps.MapTypeId.HYBRID,
        'gestureHandling': 'greedy'
    };

    mmc.mainMap = new google.maps.Map(document.getElementById('mainMap'), options);
    // var markerCluster = new MarkerClusterer(mmc.mainMap, [], {});

    var mcOptions = {gridSize: 40, maxZoom: 16, zoomOnClick: false, minimumClusterSize: 2};
    var markerCluster = new MarkerClusterer(mmc.mainMap,[], mcOptions);
    google.maps.event.addListener(markerCluster, 'clusterclick', function(cluster){
        mmc.mainMap.setCenter(cluster.getCenter());
        mmc.mainMap.setZoom(mmc.mainMap.getZoom()+1);
    });

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
                        "<a href='#!/map/kiteSpotDetails'>details</a>"+"<br>"+
                        "<a href='#!/map/kiteSpotDetails'>add to personalMap</a>");
                    $rootScope.id = spot.id;
                    $cookies.put('spot_id', $rootScope.id);
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
                    $cookies.put('spot_id', $rootScope.id);
                });
                scubaSchoolsMarkers.push(marker);
            }
            if (spot.type == "scuba-diving_spot") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var diverIcon = {
                    url: "img/diver.svg", // url
                    scaledSize: new google.maps.Size(10, 12), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var marker = new google.maps.Marker({
                    position: latLng
                    // icon: diverIcon

                });

                google.maps.event.addListener(marker, 'click', function (evt) {
                    infoWin.setContent("scuba-diving site" + "<br >" + spot.name +
                        "<br> <a href='#!/map/scubaSpotDetails'>details</a>");
                    infoWin.open(mmc.mainMap, marker);
                    $rootScope.id = spot.id;
                    $cookies.put('spot_id', $rootScope.id);


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
                "<a href='#!/map/kiteSpotDetails'>details</a>"+"<br>"+
                "<a href='#!/map/kiteSpotDetails'>add to personalMap</a>");

        }

    };


    $rootScope.placeMarkers = function () {
        if(markerCluster) {
            markerCluster.clearMarkers();
        }

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
        markerCluster.addMarkers(mergedMarkers);


    };


    mmc.types = "['establishment']";
    mmc.placeChanged = function() {
        mmc.place = this.getPlace();
        console.log('location', mmc.place.geometry.location);
        mmc.mainMap.setCenter(mmc.place.geometry.location);
        mmc.mainMap.setZoom(8);
    };


    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getSpots().then(buildMarkers, onError).then($rootScope.placeMarkers);
});