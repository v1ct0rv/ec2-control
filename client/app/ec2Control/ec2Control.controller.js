'use strict';

angular.module('ec2ControlApp')
  .controller('Ec2ControlCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.servers = [];

    $http.get('/api/ec2/servers').then(function(success) {
      $scope.servers = success.data;
    });
  });
