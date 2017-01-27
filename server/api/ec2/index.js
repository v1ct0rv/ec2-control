'use strict';

var express = require('express');
var controller = require('./ec2.controller');
var stormpath = require('express-stormpath');

var router = express.Router();

router.get('/', controller.index);

router.get('/servers', stormpath.authenticationRequired, controller.servers);

router.post('/servers/start', stormpath.authenticationRequired, controller.startServer);

router.post('/servers/stop', stormpath.authenticationRequired, controller.stopServer);

router.post('/servers/reboot', stormpath.authenticationRequired, controller.rebootServer);

module.exports = router;