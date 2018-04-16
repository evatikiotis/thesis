// initMainMap >> buildMarkers >> markerOnclick onclick open info window and place photos if they exist
var module = angular.module('myApp');
module.controller('mainMapController', function( $scope, $rootScope, NgMap, handleRequest, $cookies, $compile, $window, FlashService) {
    $scope.clickTest = function() {
        // spot id to add to personal map
        $scope.spot_to_add_id = $window.localStorage.getItem("spot_id");
        $scope.spot_to_add_name = $window.localStorage.getItem("spot_name");

        // alert($scope.sidpm);
    };
    $scope.addSpotToPersonal = function(){
        handleRequest.addSpotPersonalMap($scope.spot_to_add_id, $scope.notes, $rootScope.globals.currentUser.username)
            .then(function(response){
                if (response == "OK") {
                    FlashService.Success('Spot added to personal map successfully', false);
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
    };
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

    var mcOptions = {gridSize: 40, maxZoom: 16, zoomOnClick: false, minimumClusterSize: 7};
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
                var kitesurfingSpotIcon = {
                    url: "images/kitesurfing.svg", // url
                    scaledSize: new google.maps.Size(40, 36), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: kitesurfingSpotIcon

                });
                google.maps.event.addListener(marker, 'click', function (evt) {


                    $scope.spot = spot;
                    var contentString =
                        "<div class='infoWindow'>" +
                            "<table>" +
                                "<tr>" +
                                    "<th>name:</th>"+
                                    "<td>"+spot.name+"</td>"+
                                "</tr>"+
                                "<tr>" +
                                    "<th>type:</th>"+
                                    "<td>kitesurfing spot</td>"+
                                "</tr>"+
                            "</table>"+

                            "<hr>"+
                            "<a class='btn btn-link' href='#!/map/kiteSpotDetails/"+spot.id+"'>details</a>"+
                            "<br>"+
                            "<button " +
                                    "data-toggle='modal' " +
                                    "data-target='#add-to-personalmap-modal' " +
                                    "onclick=\"localStorage.setItem('spot_id','"+spot.id+"' );" +
                                    "localStorage.setItem('spot_name','"+spot.name+"' );\"  " +
                                    "ng-click='clickTest()'>Add to personal map" +
                            "</button>" +
                        "</div>";


                    var compiled = $compile(contentString)($scope);

                    var infowindow = new google.maps.InfoWindow({
                        content: compiled[0]
                    });
                    // var compiled = $compile(content)($scope);
                    // infoWindow.setContent(compiled);
                    // $rootScope.id = spot.id;
                    // $cookies.put('spot_id', $rootScope.id);
                    infowindow.open(mmc.mainMap, marker);
                });

                kiteSpotMarkers.push(marker);
            }
            if (spot.type == "scuba-diving_school") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var kitesurfingSpotIcon = {
                    url: "images/scubaSchool.svg", // url
                    scaledSize: new google.maps.Size(40, 36), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: kitesurfingSpotIcon

                });

                google.maps.event.addListener(marker, 'click', function (evt) {
                    var infoWindow = new google.maps.InfoWindow();
                    infoWindow.setContent("scuba-diving school" + "<br >" + spot.name+"<br> " +
                        "<a href=\"#!/map/scubadiving/school/"+spot.id+"\">details</a>"+"<br>"+
                        "<button data-toggle=\"modal\" data-target=\"#add-to-personalmap-modal\"'>add to personalMap</button>");
                    infoWindow.open(mmc.mainMap, marker);
                    $rootScope.id = spot.id;
                    $cookies.put('spot_id', $rootScope.id);
                });
                scubaSchoolsMarkers.push(marker);
            }
            if (spot.type == "scuba-diving_spot") {
                var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
                var kitesurfingSpotIcon = {
                    url: "images/diveSpot.svg", // url
                    scaledSize: new google.maps.Size(40, 36), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: kitesurfingSpotIcon

                });

                google.maps.event.addListener(marker, 'click', function (evt) {
                    var infoWindow = new google.maps.InfoWindow();
                    infoWindow.setContent("scuba-diving site" + "<br >" + spot.name +"<br>"+
                        "<a href=\"#!/map/scubaSpotDetails/"+spot.id+"\">details</a>"+"<br>"+
                        // "<br> <a href='#!/map/scubaSpotDetails'>details</a>"+ "<br>"+
                        "<button data-toggle=\"modal\" data-target=\"#add-to-personalmap-modal\"'>add to personalMap</button>");
                    infoWindow.open(mmc.mainMap, marker);
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