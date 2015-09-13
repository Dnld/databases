var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.sendResponse = sendResponse = function(res, statusCode, data) {
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  if (data) {
    res.end(JSON.stringify(data));
  } else {
    res.end();
  }
};

module.exports.addMessageToDatabase = addMessageToDatabase = function(message, callback) {
  console.log(message.username);
  var date = new Date();
  var objectId = Math.floor(Math.random() * 1000000).toString();
  var roomName = message.roomname;
  var text = message.text;
  var userName = message.username;
  var userId;
  var roomId;

  var checkId = function(table, field, value, id, callback) {
    var queryString = 'select ID `from` ' + table + 'where `'+ field +'` =?'
    db.connection.query(queryString, [value], function(error, results, fields) {
      if (result) {
        id = result
      } else {
        callback()
      }
    });
  };
  
  var getId = function() {
    
  };
  
  checkUsername(username);

  var messagePost = {
    text: text,
    date: date,
    userid: userid
  };

  db.connection.query('insert into messages set ?', messagePost, function(err, result) {
    if (err) {
      console.log('message not added to database');
    }
  });
  
};

module.exports = {
  messages: {
    options: function(req, res) {
      sendResponse(res);
    },
    get: function(req, res) {
      headers['Content-Type'] = "application/JSON";
      sendResponse(res);
    },
    post: function(req, res) {
      addMessageToDatabase(req.body);
      sendResponse(res);
    }
  },

  users: {
    // Ditto as above
    options: function(req, res) {},
    get: function(req, res) {},
    post: function(req, res) {}
  }
};
