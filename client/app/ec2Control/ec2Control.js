'use strict';

angular.module('ec2ControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ec2Control', {
        url: '/ec2Control',
        templateUrl: 'app/ec2Control/ec2Control.html',
        controller: 'Ec2ControlCtrl',
        sp: {
          authenticate: true
        }
      });
  });