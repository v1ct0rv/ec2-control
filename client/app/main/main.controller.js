'use strict';

angular.module('ec2ControlApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').then(function(success) {
      $scope.awesomeThings = success.data;
    });

  });
