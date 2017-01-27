'use strict';

angular.module('ec2ControlApp')
  .controller('Ec2ControlCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.reservations = [];

    $scope.load = function () {
      $scope.loadingData = true;
      $http.get('/api/ec2/servers').then(function (success) {
        $scope.reservations = success.data;
        $scope.loadingData = false;
      });
    };

    $scope.load();

    $scope.start = function (instance) {
      console.log('Starting Instance ' + instance.id)
      $scope.loading = true;
      $http.post('/api/ec2/servers/start', { instanceId: instance.id }).then(function (success) {
        $scope.loading = false;
        if (success.data == 'done') {
          instance.status = 'pending';
        } else {
          // Show Error.
        }
      });
    };

    $scope.stop = function (instance) {
      console.log('Stopping Instance ' + instance.id)
      $scope.loading = true;
      $http.post('/api/ec2/servers/stop', { instanceId: instance.id }).then(function (success) {
        $scope.loading = false;
        if (success.data == 'done') {
          instance.status = 'stopping';
        } else {
          // Show Error.
        }
      });
    };

    $scope.reboot = function (instance) {
      console.log('Rebooting Instance ' + instance.id)
      $scope.loading = true;
      $http.post('/api/ec2/servers/reboot', { instanceId: instance.id }).then(function (success) {
        $scope.loading = false;
        if (success.data == 'done') {
          instance.status = 'running';
        } else {
          // Show Error.
        }
      });
    };

  });
