'use strict';
const angular = require('angular');

export default angular.module('ec2ControlApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
