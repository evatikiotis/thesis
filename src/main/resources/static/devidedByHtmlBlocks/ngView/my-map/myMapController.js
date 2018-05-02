var module = angular.module('myApp');
module.controller('myMapController', function($scope, handleRequest, $rootScope, $compile, $window, FlashService, $state){
    $scope.clickTest = function() {
        // spot id to add to personal map
        $scope.spot_id_personalMap = $window.localStorage.getItem("spot_id_personalMap");
        $scope.spot_name_personalMap = $window.localStorage.getItem("spot_name_personalMap");
        $scope.spot_notes_personalMap = $window.localStorage.getItem("spot_notes_personalMap");
        // alert($scope.sidpm);
    };
    $scope.removeFromPersonalMap = function(){
        $scope.spot_remove_id_personalMap = $window.localStorage.getItem("spot_remove_id_personalMap");
        $scope.spot_remove_name_personalMap = $window.localStorage.getItem("spot_remove_name_personalMap")
    };
    $scope.removeFromPersonalMapConfirm = function(){
        handleRequest.removeFromPersonalMap($scope.spot_remove_id_personalMap, $rootScope.globals.currentUser.username)
            .then(function(response){
                if (response == "OK") {
                    FlashService.Success('Spot removed successfully', false);

                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
    };
    $scope.reloadPage = function(){
        $state.reload();
        delete $rootScope.flash;

    };

    $scope.editNotes = function(){
        handleRequest.editNotes($scope.spot_id_personalMap, $scope.spot_notes_personalMap, $rootScope.globals.currentUser.username)
            .then(function(response){
                if (response == "OK") {
                    FlashService.Success('Spot added to personal map successfully', true);
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
    };
    var mm = this;
    mm.myMap = null;
    // var markerClusterer = null;
    var infoWin = new google.maps.InfoWindow();
    var latlng = new google.maps.LatLng(37.378306, 23.642578);
    var options = {
        'id': 'myMap',
        'zoom': 6,
        'center': latlng,
        'mapTypeId': google.maps.MapTypeId.HYBRID,
        'gestureHandling': 'greedy'
    };
    mm.myMap = new google.maps.Map(document.getElementById('myMap'), options);
    var placeFavourites = function(response){
       var favouriteSpots = response;
       
       favouriteSpots.map(function(favouriteSpot){
           var spot = favouriteSpot.spot;
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
                   icon: kitesurfingSpotIcon,
                   map: mm.myMap

               });
               google.maps.event.addListener(marker, 'click', function (evt) {


                   // $scope.spot = spot;
                   var contentString =
                       "<div class='infoWindow-myMap'>" +

                           "<table>" +
                           "<tr>" +
                           "<th>name:</th>"+
                           "<td>"+spot.name+"</td>"+
                           "</tr>"+
                           "<tr>" +
                           "<th>type:</th>"+
                           "<td>kitesurfing spot</td>"+
                           "</tr>"+
                           "<tr></tr>"+
                           "<tr>" +
                           "<th>notes:</th>"+
                           "<td>"+favouriteSpot.notes+"</td>"+
                           "</tr>"+
                           "</table>"+

                           "<hr>"+
                           "<button " +
                               "data-toggle='modal' " +
                               "data-target='#edit-notes-modal' " +
                               "onclick=\"localStorage.setItem('spot_id_personalMap','"+spot.id+"' );" +
                               "localStorage.setItem('spot_name_personalMap','"+spot.name+"' );  " +
                               "localStorage.setItem('spot_notes_personalMap','"+favouriteSpot.notes+"' );\"  " +

                               "ng-click='clickTest()'>Edit notes" +
                           "</button>" +
                           "<a class='btn btn-link' href='#!/map/kiteSpotDetails/"+spot.id+"'>details</a>"+


                           "<button " +
                               "class='btn btn-sm btn-danger'"+
                                "id='remove_button'" +
                               "data-toggle='modal' " +
                               "data-target='#remove-from-personal-map-modal' " +
                               "onclick=\"localStorage.setItem('spot_remove_id_personalMap','"+spot.id+"' );" +
                                       "localStorage.setItem('spot_remove_name_personalMap','"+spot.name+"' );  " +
                                       "\"  " +

                               "ng-click='removeFromPersonalMap()'>remove" +
                           "</button>" +
                           "</div>";


                   var compiled = $compile(contentString)($scope);

                   var infowindow = new google.maps.InfoWindow({
                       content: compiled[0]
                   });

                   infowindow.open(mm.myMap, marker);
               });

               
           }
           if (spot.type == "scuba-diving_school") {
               var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
               var scubaSchoolIcon = {
                   url: "images/scubaSchool.svg", // url
                   scaledSize: new google.maps.Size(40, 36), // scaled size
                   origin: new google.maps.Point(0,0), // origin
                   anchor: new google.maps.Point(0, 0) // anchor
               };
               var marker = new google.maps.Marker({
                   position: latLng,
                   icon: scubaSchoolIcon,
                   map: mm.myMap

               });

               google.maps.event.addListener(marker, 'click', function (evt) {


                   // $scope.spot = spot;
                   var contentString =
                       "<div class='infoWindow-myMap'>" +

                       "<table>" +
                       "<tr>" +
                       "<th>name:</th>"+
                       "<td>"+spot.name+"</td>"+
                       "</tr>"+
                       "<tr>" +
                       "<th>type:</th>"+
                       "<td>scuba-diving school</td>"+
                       "</tr>"+
                       "<tr></tr>"+
                       "<tr>" +
                       "<th>notes:</th>"+
                       "<td>"+favouriteSpot.notes+"</td>"+
                       "</tr>"+
                       "</table>"+

                       "<hr>"+
                       "<button " +
                       "data-toggle='modal' " +
                       "data-target='#edit-notes-modal' " +
                       "onclick=\"localStorage.setItem('spot_id_personalMap','"+spot.id+"' );" +
                       "localStorage.setItem('spot_name_personalMap','"+spot.name+"' );  " +
                       "localStorage.setItem('spot_notes_personalMap','"+favouriteSpot.notes+"' );\"  " +

                       "ng-click='clickTest()'>Edit notes" +
                       "</button>" +
                       "<a class='btn btn-link' href='#!/map/scubadiving/school/"+spot.id+"'>details</a>"+
                       "<button " +
                           "class='btn btn-sm btn-danger'"+
                           "id='remove_button'" +
                           "data-toggle='modal' " +
                           "data-target='#remove-from-personal-map-modal' " +
                           "onclick=\"localStorage.setItem('spot_remove_id_personalMap','"+spot.id+"' );" +
                           "localStorage.setItem('spot_remove_name_personalMap','"+spot.name+"' );  " +
                           "\"  " +

                       "ng-click='removeFromPersonalMap()'>remove" +
                       "</button>" +
                       "</div>";


                   var compiled = $compile(contentString)($scope);

                   var infowindow = new google.maps.InfoWindow({
                       content: compiled[0]
                   });

                   infowindow.open(mm.myMap, marker);
               });
               
           }
           if (spot.type == "scuba-diving_spot") {
               var latLng = new google.maps.LatLng(spot.latitude, spot.longitude);
               var scubaSpotIcon = {
                   url: "images/diveSpot.svg", // url
                   scaledSize: new google.maps.Size(40, 36), // scaled size
                   origin: new google.maps.Point(0,0), // origin
                   anchor: new google.maps.Point(0, 0) // anchor
               };
               var marker = new google.maps.Marker({
                   position: latLng,
                   icon: scubaSpotIcon,
                   map: mm.myMap

               });

               google.maps.event.addListener(marker, 'click', function (evt) {


                   // $scope.spot = spot;
                   var contentString =
                       "<div class='infoWindow-myMap'>" +

                       "<table>" +
                       "<tr>" +
                       "<th>name:</th>"+
                       "<td>"+spot.name+"</td>"+
                       "</tr>"+
                       "<tr>" +
                       "<th>type:</th>"+
                       "<td>scuba-diving spot</td>"+
                       "</tr>"+
                       "<tr></tr>"+
                       "<tr>" +
                       "<th>notes:</th>"+
                       "<td>"+favouriteSpot.notes+"</td>"+
                       "</tr>"+
                       "</table>"+

                       "<hr>"+
                       "<button " +
                       "data-toggle='modal' " +
                       "data-target='#edit-notes-modal' " +
                       "onclick=\"localStorage.setItem('spot_id_personalMap','"+spot.id+"' );" +
                       "localStorage.setItem('spot_name_personalMap','"+spot.name+"' );  " +
                       "localStorage.setItem('spot_notes_personalMap','"+favouriteSpot.notes+"' );\"  " +

                       "ng-click='clickTest()'>Edit notes" +
                       "</button>" +
                       "<a class='btn btn-link' href='#!/map/scubaSpotDetails/"+spot.id+"'>details</a>"+
                       "<button " +
                           "class='btn btn-sm btn-danger'"+
                           "id='remove_button'" +
                           "data-toggle='modal' " +
                           "data-target='#remove-from-personal-map-modal' " +
                           "onclick=\"localStorage.setItem('spot_remove_id_personalMap','"+spot.id+"' );" +
                           "localStorage.setItem('spot_remove_name_personalMap','"+spot.name+"' );  " +
                           "\"  " +

                           "ng-click='removeFromPersonalMap()'>remove" +
                       "</button>" +
                       "</div>";


                   var compiled = $compile(contentString)($scope);

                   var infowindow = new google.maps.InfoWindow({
                       content: compiled[0]
                   });

                   infowindow.open(mm.myMap, marker);
               });
               

           }

       });
    };







    var onError = function (reason) {
        console.log(reason);
    };


    handleRequest.getFavouriteSpots($rootScope.globals.currentUser.username).then(placeFavourites, onError)
});