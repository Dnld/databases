var models = require('../models');
var bluebird = require('bluebird');

var statusCode = 200;
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      //headers['Allow'] = "GET, POST, PUT, DELETE, OPTIONS";
      headers['Content-Type'] = "application/JSON";
      res.writeHead(statusCode, headers);
      res.end();
      // console.log('get request received');
      // console.log('get url: ' + req.url);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //headers['Allow'] = "GET, POST, PUT, DELETE, OPTIONS";
      res.writeHead(statusCode, headers);
      res.end();
      console.log('post request received');
      console.log('post url: ' + req.url);
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log('options request received');
      headers['Allow'] = "GET, POST, OPTIONS";
      res.writeHead(statusCode, headers);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

