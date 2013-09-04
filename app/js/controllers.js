'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('PoolController', ['$scope', function ($scope) {
        $scope.routes = [];

        $scope.addRoute = function (source, destination) {
            $scope.routes.push({source: source, destination: destination});
            $scope.source = $scope.destination = '';
        };

        $scope.removeRoute = function (index) {
            if (index > -1 && index < $scope.routes.length) {
                $scope.routes.splice(index, 1);
            }
        };
    }]).
    controller('HitchController', ['$scope', function ($scope) {
        $scope.message = "";

        $scope.searchRoute = function(source, destination) {
            // <div class="progress progress-striped active"> <div class="bar" style="width: 40%;"></div> </div>
            console.log(source + "->" + destination);
            $scope.message = "Thanks for using powerpool! We are searching for possible pools in your route..."
        };
    }]);
