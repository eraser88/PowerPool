'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('PoolController', ['$scope', function($scope) {
	$scope.routes = [];
	$scope.addRoute = function(source, destination){
	    $scope.routes.push({source : source, destination: destination});
	    $scope.source = $scope.destination = '';
	}
    }]);
