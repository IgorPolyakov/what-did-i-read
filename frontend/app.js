(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngStorage', 'ui.materialize'])
        .config(config)
        .run(run);

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/index.view.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: 'login/index.view.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            })
            .when('/signup', {
              templateUrl: 'signup/index.view.html',
              controller: 'Signup.IndexController',
              controllerAs: 'vm'
            })
            .when('/', {
              templateUrl: 'start/index.view.html',
              controller: 'Start.IndexController',
              controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login','/signup','/'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/');
            }
        });
    }
})();
