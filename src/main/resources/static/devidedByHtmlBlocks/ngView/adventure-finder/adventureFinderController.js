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
module.controller('ExampleController', function(PagerService, handleRequest, $rootScope, $timeout) {

    var vm = this;
    $rootScope.from_breadcrumb = "spot-finder";
    // vm.dummyItems = _.range(1, 1000); // dummy array of items to be paged
    vm.pager = {};
    vm.setPage = setPage;
    vm.sortBy = 'name';
    vm.showType = '%25';
    var _timeout;

    vm.search = function(){
        if(_timeout){ //if there is already a timeout in process cancel it
            $timeout.cancel(_timeout);
        }
        _timeout = $timeout(function(){
            handleRequest.searchForSpots(vm.searchTerm, 0, vm.sortBy, vm.showType).then(handleSearchResponse, onError);
            _timeout = null;
        },650);

    };

    function initController() {
        // initialize to page 1
        // vm.setPage(1);
        handleRequest.searchForSpots("", 0, vm.sortBy, vm.showType).then(handleSearchResponse, onError);
        // console.log(spots[1]);
    }

    vm.sortingChanged = function() {
        var searchTerm = vm.searchTerm ? vm.searchTerm : ""
        handleRequest.searchForSpots(searchTerm, vm.pager.currentPage - 1, vm.sortBy, vm.showType).then(handlePageChange, onError);

    };

    vm.typeChanged = function () {
        var searchTerm = vm.searchTerm ? vm.searchTerm : ""
        handleRequest.searchForSpots(searchTerm, 0, vm.sortBy, vm.showType).then(handleSearchResponse, onError);
    };

    function setPage(page, pageChanged) {
        if (page < 1 || page > vm.pager.totalPages) {
            return;
        }

        // get pager object from service
        vm.pager = PagerService.GetPager(vm.dummyItems.length, page);
        if(pageChanged) {
            var searchTerm = vm.searchTerm ? vm.searchTerm : ""
            handleRequest.searchForSpots(searchTerm, page - 1, vm.sortBy, vm.showType).then(handlePageChange, onError);
        }
        // get current page of items
        // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

    var handleSearchResponse = function(response) {
        vm.dummyItems = _.range(1, response.totalElements);
        vm.items = response.content;
        vm.setPage(response.number+ 1, false);

    };
    var handlePageChange = function(response) {
        vm.dummyItems = _.range(1, response.totalElements);
        vm.items = response.content;

    };

    var onError = function (reason) {
        console.log(reason);
    };
    initController();
});



