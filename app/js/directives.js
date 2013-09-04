'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('googleMapSuggest', [function () {
        return function (scope, elm, attrs) {
            new google.maps.places.Autocomplete(elm[0]);
        };
    }])
    .directive('input',[function() { //the magic here is to update the ng-model of the inputs when autocompleted.
        return {
            restrict: 'E',
            require: '?ngModel',
            link: function($scope, element, attrs, controller) {
                if (!attrs.type || attrs.type !== "text" || !controller) {
                    return;
                }
                element.on('blur', function () {
                    $scope.$apply(function () {
                        controller.$setViewValue(element.val());
                    });
                });
            }
        };
    }]);


