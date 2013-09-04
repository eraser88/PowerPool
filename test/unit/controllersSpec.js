'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should add source and destination to the source and destination list', inject(function($rootScope, $controller) {
      var scope = $rootScope.$new();
      var ctrl = $controller('PoolController', {$scope: scope});

      scope.addRoute('start', 'end');

      expect(scope.routes[0].source).toBe('start');
      expect(scope.routes[0].destination).toBe('end');
      expect(scope.source).toBe('');
      expect(scope.destination).toBe('');
  }));

  it('should remove the source and destination from the routes list', inject(function($rootScope, $controller) {
      var scope = $rootScope.$new();
      var ctrl = $controller('PoolController', {$scope: scope});
      scope.routes = [{source: 'start', destination: 'end'}, {source: 'start2', destination: 'end2'}];

      scope.removeRoute(0);

      expect(scope.routes.length).toBe(1);
      expect(scope.routes[0].source).toBe('start2');
      expect(scope.routes[0].destination).toBe('end2');
  }));

    it('should search a route that includes the specified source and destination', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        var ctrl = $controller('HitchController', {$scope: scope});

        scope.searchRoute('start', 'end');
        expect(scope.message).toBe('Thanks for using powerpool! We are searching for possible pools in your route...');
    }));

    it('should ....', inject(function() {
    //spec body
  }));
});
