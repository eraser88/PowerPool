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

  it('should ....', inject(function() {
    //spec body
  }));
});
