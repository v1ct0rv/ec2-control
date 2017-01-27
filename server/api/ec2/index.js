'use strict';

var express = require('express');
var controller = require('./ec2.controller');
var stormpath = require('express-stormpath');

var router = express.Router();

router.get('/', controller.index);

router.get('/servers', stormpath.authenticationRequired, controller.servers);

module.exports = router;