(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};


        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.uploadProfileImage = uploadProfileImage;
        service.checkUsernameAvailability = checkUsernameAvailability;
        service.checkOldPassword = checkOldPassword;
        service.changePassword = changePassword;

        return service;
        // var server = '/adventurer';
        var server = '';

        function GetAll() {
            return $http.get(server+'/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get(server+'/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get(server+'/user/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post(server+'/users/add', user ).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put(server+'/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete(server+'/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        //vv
        function uploadProfileImage(username, image){
            return $http.post(server+'/user/upload-profile-image/'+username, image ).then(handleSuccess, handleError('Error creating user'));
        }

        function checkUsernameAvailability(possible_username){
            return $http.get(server+'/check-username-availability/'+possible_username);
        }

        function checkOldPassword(username, oldPassword){
            return $http.get(server+'/check-old-password/'+username + '/'+ oldPassword);

        }

        function changePassword(username, password){
            return $http.post(server+'/change-password/'+username, password);
        }
    }

})();
