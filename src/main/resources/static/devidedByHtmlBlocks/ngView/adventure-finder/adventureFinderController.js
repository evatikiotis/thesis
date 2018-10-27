// var module = angular.module('myApp');
// app.controller('adventureFinderController', function($scope, handleRequest, $rootScope) {

    // $rootScope.from_breadcrumb = "spot-finder";
    // var placeScubaDivingSearchDTO = function(response){
    //     $scope.search_dtos = response;
    // };
    //
    // var placeKitesurfingSearchDTO =function(response){
    //     $scope.search_dtos = response;
    // };
    // var placeScubaSpotSearchDTO = function(response){
    //     $scope.search_dtos = response;
    // };
    //
    // var placeScubaDivingSchoolsRecommendations = function(response){
    //     $scope.schools = response;
    // };
    // var onError = function (reason) {
    //     console.log(reason);
    // };
    // var placeSearchValues = function(response){
    //     $scope.items = response;
    // };
    // var dataLoaded = function(){
    //     $scope.dataLoading = false;
    // };
    //
    // $scope.getScubaSchoolSearchDTOs = function(){
    //
    //     $scope.dataLoading = true;
    //     $scope.search_dtos=[];
    //     handleRequest.getScubaDivingSearchDTOs().then(placeScubaDivingSearchDTO, onError).then(dataLoaded,onError);
    // };
    // $scope.getKitesurfingSearchDTOs = function(){
    //     $scope.search_dtos=[];
    //     handleRequest.getKitesurfingSearchDTOs().then(placeKitesurfingSearchDTO, onError).then(dataLoaded,onError);
    // };
    // $scope.getScubaSpotSearchDTOs = function(){
    //     $scope.dataLoading = true;
    //
    //     $scope.search_dtos=[];
    //     handleRequest.getScubaDivingSpotsSearchDTOs().then(placeKitesurfingSearchDTO, onError).then(dataLoaded,onError);
    // };
    // $scope.only_interest_scuba = false;
    // var navigateFinder = function(response){
    //     if(response.user_interests.length ==1 ){
    //         if(response.user_interests[0].user_interest_key.interest==="scuba-diving"){
    //             $scope.only_interest_scuba = true;
    //         }
    //
    //     }
    // };
    //
    // ratingsPosition = 'right';
    //
    // if($rootScope.globals.currentUser){
    //     handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(navigateFinder,onError);
    // }
    // handleRequest.getScubaDivingSearchDTO().then(placeScubaDivingSearchDTO, onError);
    // handleRequest.getKitesurfingSearchDTO().then(placeKitesurfingSearchDTO, onError)
    // handleRequest.getScubaDivingSchoolsRecommendations().then(placeScubaDivingSchoolsRecommendations, onError);
    // handleRequest.getSpotNames().then(placeSearchValues,onError);



// });

var module = angular.module('myApp');
module.controller('ExampleController', function(PagerService, handleRequest, $rootScope) {

    var vm = this;
    $rootScope.from_breadcrumb = "spot-finder";
    // vm.dummyItems = _.range(1, 1000); // dummy array of items to be paged
    vm.pager = {};
    vm.setPage = setPage;
    vm.sortBy = 'name';

    vm.search = function(){
        handleRequest.searchForSpots(vm.searchTerm, 0).then(handleSearchResponse, onError);
    };

    function initController() {
        // initialize to page 1
        // vm.setPage(1);
        handleRequest.searchForSpots("", 0).then(handleSearchResponse, onError);
        // console.log(spots[1]);
    }

    function setPage(page, pageChanged) {
        if (page < 1 || page > vm.pager.totalPages) {
            return;
        }
        console.log(page);

        // get pager object from service
        vm.pager = PagerService.GetPager(vm.dummyItems.length, page);
        if(pageChanged) {
            var search = vm.searchTerm ? vm.searchTerm : ""
            handleRequest.searchForSpots(search, page - 1).then(handlePageChange, onError);
        }
        // get current page of items
        // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

    var handleSearchResponse = function(response) {
        vm.dummyItems = _.range(1, response.totalElements);
        vm.items = response.content;
        vm.setPage(response.number+ 1, false);
        console.log("apedo");

    };
    var handlePageChange = function(response) {
        vm.dummyItems = _.range(1, response.totalElements);
        vm.items = response.content;
        console.log("apedo");

    };

    var onError = function (reason) {
        console.log(reason);
    };
    initController();
});



