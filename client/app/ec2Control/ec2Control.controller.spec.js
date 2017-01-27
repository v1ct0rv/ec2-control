'use strict';

describe('Controller: Ec2ControlCtrl', function () {

  // load the controller's module
  beforeEach(module('ec2ControlApp'));

  var Ec2ControlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ec2ControlCtrl = $controller('Ec2ControlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
