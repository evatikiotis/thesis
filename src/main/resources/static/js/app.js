(function () {

    var myApp = angular.module('myApp', [ 'ngMap','autocomplete', 'ui.router', 'ncy-angular-breadcrumb', 'ngCookies', 'ngFileUpload', 'ui.bootstrap',
                                'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
        myApp.config(config);
        myApp.run(run);


    function config($stateProvider, $locationProvider, $urlRouterProvider) {

        var home = {name: 'home', url:'/',
            templateUrl:'devidedByHtmlBlocks/ngView/home/home.view.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Home'}};

        var login = {name: 'login', url:'/login',
            templateUrl:'devidedByHtmlBlocks/ngView/login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Login'}};

        var register = {name: 'register', url:'/register',
            templateUrl:'devidedByHtmlBlocks/ngView/register/register.view.html',
            controller: 'RegisterController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Register'}};

        var myProfile = {name: 'myProfile', url:'/my-profile',
            templateUrl:'devidedByHtmlBlocks/ngView/my-profile/my-profile.html',
            controller: 'myProfileController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'My Profile'}};

        // var home = {name: 'home', url:'/home', templateUrl:'devidedByHtmlBlocks/ngView/home/home.html',
        //     ncyBreadcrumb:{ label: 'Home page'}};

        var map = {name: 'map',
            url:'/map',
            templateUrl:'devidedByHtmlBlocks/ngView/map/map.html',
            controller: 'mainMapController',
            controllerAs: 'mmc',
            ncyBreadcrumb:{
                label: 'Spots'}
        };

        var kiteSpotDetails = {name: 'kiteSpotDetails',url: '/map/kiteSpotDetails/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/kitesurfing/kitespotDetails.html',
            controller: 'kiteSpotDetailsController',
            controllerAs: 'vm',
            ncyBreadcrumb:{
                parent: function($rootScope) {
                    if($rootScope.from_breadcrumb == "map"){return 'map'}
                    if($rootScope.from_breadcrumb == "myMap"){return 'myMap'}
                    if($rootScope.from_breadcrumb == "spot-finder"){return 'spotFinder'}

                    },
                label: '> {{spot.name}}'}};

        var scubaSpotDetails = {
            name: 'scubaSpotDetails',url: '/map/scubaSpotDetails/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/scuba_diving/diveSpotDetails.html',
            controller: 'diveSpotDetailsController',
            ncyBreadcrumb:{
                parent: function($rootScope) {
                    if($rootScope.from_breadcrumb == "map"){return 'map'}
                    if($rootScope.from_breadcrumb == "myMap"){return 'myMap'}
                    if($rootScope.from_breadcrumb == "spot-finder"){return 'spotFinder'}

                },
                label: '> {{spot.name}}'}
        };

        var scubaSchoolDetails = {name: 'scubaSchoolDetails',url: '/map/scubadiving/school/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/scuba_diving/diveSchoolDetails.html',
            controller: 'diveSchoolDetailsController',
            ncyBreadcrumb:{
                parent: function($rootScope) {
                    if($rootScope.from_breadcrumb == "map"){return 'map'}
                    if($rootScope.from_breadcrumb == "myMap"){return 'myMap'}
                    if($rootScope.from_breadcrumb == "spot-finder"){return 'spotFinder'}

                },
                label: '> {{spot.name}}'}
        };


        var myMap = {name: 'myMap',url: '/my_map',
            templateUrl: 'devidedByHtmlBlocks/ngView/my-map/myMap.html',
            controller: 'myMapController',
            ncyBreadcrumb:{

                label: 'My Map'
            }
        };

        var adventureFinder = {name: 'spotFinder',url: '/adventure-finder',
            templateUrl: 'devidedByHtmlBlocks/ngView/adventure-finder/adventure_finder.html',
            controller: 'ExampleController',
            controllerAs: 'vm',
            ncyBreadcrumb:{

                label: 'Spot Finder'
            }
        };

        // var login = {name: 'login',url: '/login', templateUrl: 'devidedByHtmlBlocks/ngView/login/login.html'};
        //
        // var register = {name: 'register',url: '/register', templateUrl: 'devidedByHtmlBlocks/ngView/register/register.html'};

        $stateProvider.state(home);
        $stateProvider.state(login);
        $stateProvider.state(register);
        $stateProvider.state(map);
        $stateProvider.state(kiteSpotDetails);
        $stateProvider.state(scubaSpotDetails);
        $stateProvider.state(scubaSchoolDetails);
        $stateProvider.state(myMap);
        $stateProvider.state(adventureFinder);
        $stateProvider.state(myProfile);
        $urlRouterProvider.otherwise('/');

    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'FlashService'];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.scuba_diving = true;
        $rootScope.scuba_diving_schools = true;
        $rootScope.scuba_diving_spots = true;
        $rootScope.kitesurfing = true;

        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }





        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            // var restrictedPage = $.inArray($location.path(), ['/login', '/register','/', '/map', '/weather_map', '/adventure-finder','/map/kiteS' ]) === -1;

            var restrictedPage = $.inArray($location.path(), ['/my_map' ]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            var nav_home = angular.element(document.querySelector('#nav_home'));
            var nav_map = angular.element(document.querySelector('#nav_map'));
            var nav_myMap = angular.element(document.querySelector('#nav_myMap'));
            var nav_adventureFinder = angular.element(document.querySelector('#nav_adventureFinder'));
            var nav_about = angular.element(document.querySelector('#nav_about'));

            if($location.url() == "/my_map"){
                if(!loggedIn) {
                    nav_myMap.blur();
                    nav_adventureFinder.removeClass('active');
                    nav_myMap.removeClass('active');
                    nav_map.removeClass('active');
                    nav_home.removeClass('active');
                    $location.path('/login');
                }
                if(loggedIn){
                    nav_adventureFinder.removeClass('active');
                    nav_myMap.addClass('active');
                    nav_map.removeClass('active');
                    nav_home.removeClass('active');
                }

            }

        });

    }



})();
