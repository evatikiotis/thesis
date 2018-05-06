var module = angular.module('myApp');
module.controller('myProfileController', function($rootScope, handleRequest, UserService, $scope, $state, $window, FlashService) {
    vm = this;
    $scope.types = "['address']";
    vm.attention = false;







    var placeUserinfo = function(data){
        vm.user = data;
        for(var i=0; i<vm.user.user_interests.length; i++){
            if(vm.user.user_interests[i].user_interest_key.interest === "scuba-diving"){
                vm.scubadiving = "scuba-diving";
                vm.scubadiving_level = vm.user.user_interests[i].level;
                vm.user.user_interests[i].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            }
            if(vm.user.user_interests[i].user_interest_key.interest === "kitesurfing") {
                vm.kitesurfing = "kitesurfing";
                vm.kitesurfing_level = vm.user.user_interests[i].level;
                vm.user.user_interests[i].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            }
        }
        if(!(vm.user.user_interests.length>0)){
            vm.user.user_interests =[{
                "user_interest_key":
                    {"user_username":$rootScope.globals.currentUser.username,
                        "interest":"empty",
                        "user_interest":"empty"
                    },
                "level":"beginner"
            },{"user_interest_key":
                    {"user_username":$rootScope.globals.currentUser.username,
                        "interest":"empty",
                        "user_interest":"empty"
                    },
                "level":"empty"}];
        }
        if(vm.user.user_interests.length===1){
            vm.user.user_interests.push({"user_interest_key":
                    {"user_username":$rootScope.globals.currentUser.username,
                        "interest":"empty",
                        "user_interest":"empty"
                    },
                "level":"empty"});
        }



    };

    // var placeUserInterests = function(data){
    //     vm.interests = data;
    //
    //
    //    for(var i=0; vm.interests.length;i++){
    //        if(!vm.user.user_interests[i].user_interest_key.interest === "kitesurfing" && i===0){
    //
    //        }
    //    }
    // };
    vm.changeInfo = function(){
        var user_interest_key_new = [];
        if(vm.scubadiving === "scuba-diving" && vm.kitesurfing === "kitesurfing" ){
            vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[0].user_interest_key.interest = "kitesurfing";
            vm.user.user_interests[0].user_interest_key.user_interest = "kitesurfing";
            vm.user.user_interests[0].level = vm.kitesurfing_level;

            vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[1].user_interest_key.interest = "scuba-diving";
            vm.user.user_interests[1].user_interest_key.user_interest = "scuba-diving";
            vm.user.user_interests[1].level = vm.scubadiving_level;

        }
        if(!(vm.scubadiving === "scuba-diving" && vm.kitesurfing === "kitesurfing")){
            vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[0].user_interest_key.interest = "kitesurfing_remove";
            vm.user.user_interests[0].user_interest_key.user_interest = "kitesurfing_remove";
            vm.user.user_interests[0].level = vm.kitesurfing_level;

            vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[1].user_interest_key.interest = "scuba-diving_remove";
            vm.user.user_interests[1].user_interest_key.user_interest = "scuba-diving_remove";
            vm.user.user_interests[1].level = vm.scubadiving_level;

        }
        if(!(vm.scubadiving === "scuba-diving") && vm.kitesurfing === "kitesurfing"){
            vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[0].user_interest_key.interest = "kitesurfing";
            vm.user.user_interests[0].user_interest_key.user_interest = "kitesurfing";
            vm.user.user_interests[0].level = vm.kitesurfing_level;

            vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[1].user_interest_key.interest = "scuba-diving_remove";
            vm.user.user_interests[1].user_interest_key.user_interest = "scuba-diving_remove";
            vm.user.user_interests[1].level = vm.scubadiving_level;

        }
        if(vm.scubadiving === "scuba-diving" && !(vm.kitesurfing === "kitesurfing")){
            vm.user.user_interests[0].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[0].user_interest_key.interest = "kitesurfing_remove";
            vm.user.user_interests[0].user_interest_key.user_interest = "kitesurfing_remove";
            vm.user.user_interests[0].level = vm.kitesurfing_level;

            vm.user.user_interests[1].user_interest_key.user_username = $rootScope.globals.currentUser.username;
            vm.user.user_interests[1].user_interest_key.interest = "scuba-diving";
            vm.user.user_interests[1].user_interest_key.user_interest = "scuba-diving";
            vm.user.user_interests[1].level = vm.scubadiving_level;

        }





        handleRequest.changeUserInfo(vm.user)
            .then(function(response){
                if (response == "OK") {
                    // uc.message =  "Profile image updated successfully";
                    FlashService.Success('Profile info updated successfully', false);
                    $window.location.reload();
                } else {
                    FlashService.Error("Oops, something unexpected happened. Please try again", false);
                }
            })

        // $state.go('myProfile');
        // $window.location.reload();

    };




    var onError = function (reason) {
        console.log(reason);
    };

    handleRequest.getUserInfo($rootScope.globals.currentUser.username).then(placeUserinfo, onError);
    // handleRequest.getUserInterests($rootScope.globals.currentUser.username).then(placeUserInterests, onError);
    $scope.reload = function(){
        $state.go('myProfile');
    };
});