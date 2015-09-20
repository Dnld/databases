var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.json({results: results});
      });
    },
    post: function (req, res) {
      models.messages.post(req.body);
    }
  },

  users: {
    get: function(req, res) {
      models.users.get(name, function(err, results) {
        res.json(results);
      });
    },
    post: function(req, res) {
      var name = req.body['username'];
      models.users.post(name, function() {
        res.end();
      });
    }
  }
};

