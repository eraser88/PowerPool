'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/pool.html', controller: 'PoolController'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
