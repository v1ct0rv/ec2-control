'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('ec2ControlApp.util', [])
  .factory('Util', UtilService)
  .name;
