'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('PoolController', ['$scope', function($scope) {
        $scope.routes = [];

        $scope.addRoute = function(source, destination){
            $scope.routes.push({source : source, destination: destination});
            $scope.source = $scope.destination = '';
	    };

        $scope.removeRoute = function(index){
            if(index > -1 && index < $scope.routes.length) {
                $scope.routes.splice(index, 1);
            }
        };
    }]);
