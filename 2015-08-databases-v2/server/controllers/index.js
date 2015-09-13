var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      res.end();
    },
    post: function (req, res) {
      console.log(req.body);
    }
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

