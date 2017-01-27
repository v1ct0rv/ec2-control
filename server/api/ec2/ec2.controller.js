'use strict';

var _ = require('lodash');
var AWS = require('aws-sdk');
const util = require('util')

AWS.config.update({ region: 'us-east-1' });
var ec2 = new AWS.EC2();

// Get list of ec2s
exports.index = function (req, res) {
  res.json([]);
};

exports.servers = function (req, res) {
  ec2.describeInstances({}, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      // console.dir(util.inspect(data, false, null));
      if (data) {
        var reservations = []
        _.forEach(data.Reservations, function (reservation) {
          // console.dir(reservation);
          var reservatioObj = {
            id: reservation.ReservationId,
            instances: []
          }

          // Iterate over instances
          _.forEach(reservation.Instances, function (i) {
            reservatioObj.instances.push({
              id: i.InstanceId,
              name: _.find(i.Tags, function (o) { return o.Key == 'Name' }).Value,
              type: i.InstanceType,
              publicIp: i.PublicIpAddress,
              privateIp: i.PrivateIpAddress,
              status: i.State.Name
            });
          });

          reservations.push(reservatioObj);
        });
        res.json(reservations);
      }
    }
  });
};

exports.startServer = function (req, res) {
  console.log('Starting instance ' + req.body.instanceId);
  var params = {
    InstanceIds: [req.body.instanceId]
  };

  ec2.startInstances(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.end("error");
    }
    else {
      console.log(data);           // successful response
      res.end("done");
    }
  });
};

exports.stopServer = function (req, res) {
  console.log('Stopping instance ' + req.body.instanceId);
  var params = {
    InstanceIds: [req.body.instanceId]
  };

  ec2.stopInstances(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.end("error");
    }
    else {
      console.log(data);           // successful response
      res.end("done");
    }
  });
};

exports.rebootServer = function (req, res) {
  console.log('Rebooting instance ' + req.body.instanceId)
  var params = {
    InstanceIds: [req.body.instanceId]
  };

  ec2.rebootInstances(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.end("error");
    }
    else {
      console.log(data);           // successful response
      res.end("done");
    }
  });
};