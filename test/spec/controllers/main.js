'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('beenToApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no been to countries to start', function () {
    expect(scope.beenToCountries.length).toBe(0);
  });

  it('should add c to the list', function () {
    var ac = {'region-code':"150","alpha-2":"AF","name":"Afganistan"};
    scope.addCountry(ac);
    expect(scope.beenToCountries.length).toBe(1);
  });

  // it('should add then remove an item from the list', function () {
  //   scope.todo = 'Test 1';
  //   scope.addTodo();
  //   scope.removeTodo(0);
  //   expect(scope.todos.length).toBe(0);
  // });

});
