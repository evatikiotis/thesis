
var module = angular.module('myApp');
module.controller('changePasswordController', function($rootScope, handleRequest, UserService, $scope) {
    cp = this;
    cp.checkOldPassword = function(form){
        UserService.checkOldPassword($rootScope.globals.currentUser.username, cp.user.oldPassword)
            .then(function(response){
                if(response.data == "OK"){
                    form.old_password.$setValidity("password", true);
                    cp.oldPassword_OK = true;
                }else{
                    form.old_password.$setValidity("password", false);
                    cp.oldPassword_OK = false;
                }
            })
    };
    cp.confirmPassword = function(form){

        if(cp.user.password == cp.repeat_password){
            form.repeat_password.$setValidity("password", true);
        }else{
            form.repeat_password.$setValidity("password", false);
        }
    };
})