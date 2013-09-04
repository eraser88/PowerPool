'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html'
        });
        $routeProvider.when('/pool/new', {
            templateUrl: 'partials/pool.html', controller: 'PoolController'
        });
        $routeProvider.when('/pool/join', {
            templateUrl: 'partials/hitch.html', controller: 'HitchController'
        });
        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html'
        });
        $routeProvider.when('/contact', {
            templateUrl: 'partials/contact.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
