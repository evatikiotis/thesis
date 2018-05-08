(function () {

    var myApp = angular.module('myApp', [ 'ngMap','autocomplete', 'ui.router', 'ncy-angular-breadcrumb', 'ngCookies', 'ngFileUpload', 'ui.bootstrap',
                                'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
        myApp.config(config);
        myApp.run(run);


    function config($stateProvider, $locationProvider) {
        var home = {name: 'home', url:'/',
            templateUrl:'devidedByHtmlBlocks/ngView/home/home.view.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Home page'}};

        var login = {name: 'login', url:'/login',
            templateUrl:'devidedByHtmlBlocks/ngView/login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Login page'}};

        var register = {name: 'register', url:'/register',
            templateUrl:'devidedByHtmlBlocks/ngView/register/register.view.html',
            controller: 'RegisterController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'Register page'}};

        var myProfile = {name: 'myProfile', url:'/my-profile',
            templateUrl:'devidedByHtmlBlocks/ngView/my-profile/my-profile.html',
            controller: 'myProfileController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'my prfile page'}};

        // var home = {name: 'home', url:'/home', templateUrl:'devidedByHtmlBlocks/ngView/home/home.html',
        //     ncyBreadcrumb:{ label: 'Home page'}};

        var map = {name: 'map',
            url:'/map',
            templateUrl:'devidedByHtmlBlocks/ngView/map/map.html',
            controller: 'mainMapController',
            controllerAs: 'mmc', ncyBreadcrumb:{ label: 'spots'}};

        var kiteSpotDetails = {name: 'kiteSpotDetails',url: '/map/kiteSpotDetails/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/kitesurfing/kitespotDetails.html',
            controller: 'kiteSpotDetailsController',
            controllerAs: 'vm',
            ncyBreadcrumb:{ label: 'kitesurfing spot'}};

        var scubaSpotDetails = {name: 'scubaSpotDetails',url: '/map/scubaSpotDetails/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/scuba_diving/diveSpotDetails.html',
            controller: 'diveSpotDetailsController'};

        var scubaSchoolDetails = {name: 'scubaSchoolDetails',url: '/map/scubadiving/school/:id',
            templateUrl: 'devidedByHtmlBlocks/ngView/map/scuba_diving/diveSchoolDetails.html',
            controller: 'diveSchoolDetailsController'};

        var weatherMap={name: 'weatherMap',url: '/weather_map',
            templateUrl: 'devidedByHtmlBlocks/ngView/weatherMap/weather_map.html'};

        var myMap = {name: 'myMap',url: '/my_map',
            templateUrl: 'devidedByHtmlBlocks/ngView/my-map/myMap.html',
            controller: 'myMapController'
        };

        var adventureFinder = {name: 'adventureFinder',url: '/adventure-finder',
            templateUrl: 'devidedByHtmlBlocks/ngView/adventure-finder/adventure_finder.html',
            controller: 'adventureFinderController'
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
        $stateProvider.state(weatherMap);
        $stateProvider.state(myMap);
        $stateProvider.state(adventureFinder);
        $stateProvider.state(myProfile);

    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'FlashService'];
    function run($rootScope, $location, $cookies, $http) {

        //init main map
        $rootScope.kitesurfing = true;
        $rootScope.scuba_diving=true;
        $rootScope.scuba_diving_schools=true;
        $rootScope.scuba_diving_spots=true;
        $rootScope.weatherEntrance = 0;


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
            if (!restrictedPage && !loggedIn) {
                $location.path('/login');
            }
            // FlashService.
            var nav_home = angular.element(document.querySelector('#nav_home'));
            var nav_map = angular.element(document.querySelector('#nav_map'));
            var nav_weatherMap = angular.element(document.querySelector('#nav_weatherMap'));
            var nav_myMap = angular.element(document.querySelector('#nav_myMap'));
            var nav_adventureFinder = angular.element(document.querySelector('#nav_adventureFinder'));
            var nav_about = angular.element(document.querySelector('#nav_about'));
            if($location.url() == "/"){
                nav_home.addClass('active');
                nav_map.removeClass('active');
                nav_weatherMap.removeClass('active');
                nav_myMap.removeClass('active');
                nav_adventureFinder.removeClass('active');
            }
            if($location.url() == "/map"){
                nav_map.addClass('active');
                nav_home.removeClass('active');
                nav_weatherMap.removeClass('active');
                nav_myMap.removeClass('active');
                nav_adventureFinder.removeClass('active');
            }
            if($location.url() == "/weather_map"){
                nav_weatherMap.addClass('active');
                nav_map.removeClass('active');
                nav_home.removeClass('active');
                nav_myMap.removeClass('active');
                nav_adventureFinder.removeClass('active');

            }
            if($location.url() == "/my_map"){
                nav_myMap.addClass('active');
                nav_weatherMap.removeClass('active');
                nav_map.removeClass('active');
                nav_home.removeClass('active');
                nav_adventureFinder.removeClass('active');
            }
            if($location.url() == "/adventure-finder"){
                nav_adventureFinder.addClass('active');
                nav_myMap.removeClass('active');
                nav_weatherMap.removeClass('active');
                nav_map.removeClass('active');
                nav_home.removeClass('active');

            }


        });

    }



})();