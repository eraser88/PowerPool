'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('googleMapSuggest', [function() {
    return function(scope, elm, attrs) {
      new google.maps.places.Autocomplete(elm[0]);      
    };
  }]);
