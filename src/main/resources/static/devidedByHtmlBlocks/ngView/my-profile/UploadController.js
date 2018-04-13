//inject angular file upload directives and services.
var app = angular.module('myApp');

app.controller('uploadController',function ($scope, Upload, $timeout,$rootScope, FlashService, $state) {
    uc = this;
    $scope.uploadPic = function(file) {
        file.upload = Upload.upload({
            url: '/user/upload-profile-image/'+$rootScope.globals.currentUser.username,
            data: {file: file},
        });

        var respond = function(response){
            if (response.data == "OK") {
                // uc.message =  "Profile image updated successfully";
                FlashService.Success('Profile image updated successfully', false);
            } else {
                FlashService.Error("Oops, something unexpected happened. Please try again", false);
            }
        };

        file.upload.then(respond);

    };

});