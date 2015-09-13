var db = require('../db');

var queryDB = function(query, callback) {
  db.connection.query(query, function(err, results) {
    if (err) {
      console.log('db query unsuccessful');
    } else {
      callback(results);
    }
  })
};

module.exports = {
  messages: {
    get: function(callback) {
      var queryString = 'select id, (select username from users where id = messages.userid) as username, text, room, date from messages'
      queryDB(queryString, callback);
    },
    post: function () {}
  },

  users: {
    get: function(callback) {
      var queryString = 'select * from users';
      queryDB(queryString, callback);
    },
    post: function () {}
  }
};

