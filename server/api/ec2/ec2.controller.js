'use strict';

var _ = require('lodash');

// Get list of ec2s
exports.index = function(req, res) {
  res.json([]);
};

exports.servers = function(req, res) {
  res.json(['server1', 'server2']);
};