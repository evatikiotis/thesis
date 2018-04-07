//inject angular file upload directives and services.
var app = angular.module('myApp');

app.controller('uploadController', ['$scope', 'Upload', '$timeout','$rootScope', function ($scope, Upload, $timeout,$rootScope) {
    $scope.uploadPic = function(file) {
        file.upload = Upload.upload({
            url: '/user/upload-profile-image/'+$rootScope.globals.currentUser.username,
            data: {file: file},
        });

        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
}]);