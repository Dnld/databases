var db = require('../db');

// re-implementation using Sequelize

module.exports = {
  messages: {
    get: function(callback) {
      db.Messages.findAll({include: [Users]}).then(callback);
    },
    post: function(data) {
      db.Users.findOrCreate({where: {username: data.username}}).then(
        function(user) {
          db.Messages.create({
            UserId: user[0].id,
            text: data.text,
            room: data.room,
            date: new Date()
          });
      });
    }
  },
  
  users: {
    get: function(name, callback) {
      db.Users.findAll({where: {username: name}}).then(callback);
    },
    post: function(name, callback) {
      db.Users.create({username: name}).then(callback);
    }
  },
  
};

// var queryDB = function(query, callback) {
//   db.connection.query(query, function(err, results) {
//     if (err) {
//       console.log('queryDB: db query unsuccessful');
//     } else {
//       callback(results);
//     }
//   });
// };

// var postMessage = function(message, results) {
//   var messageString = 'insert into messages SET ?';
//   var date = new Date();
//   var post = {
//     userid: results[0].id,
//     text: message['text'],
//     room: message['room'],
//     date: date
//   };
//   db.connection.query(messageString, post);
// };

// module.exports = {
//   messages: {
//     get: function(callback) {
//       var queryString = 'select id, (select username from users where id = messages.userid) as username, text, room, date from messages';
//       queryDB(queryString, callback);
//     },
//     post: function(message, callback) {
//       var usernameQuery = 'select id from users where username = ? limit 1';
//       db.connection.query(usernameQuery, message['username'], function(err, results) {
//         if (results[0]) {
//           postMessage(message, results);
//         } else {
//           var queryString = 'insert into users SET ?';
//           db.connection.query(queryString, {username: message['username']}, function(err, results) {
//             db.connection.query(usernameQuery, message['username'], function(err, results) {
//               if (results[0]) {
//                 postMessage(message, results);
//               }
//             });
//           });
//         }
//       });
//     }
//   },

//   users: {
//     get: function(callback) {
//       var queryString = 'select * from users';
//       queryDB(queryString, callback);
//     },
//     post: function(name, callback) {
//       var queryString = 'insert into users (username) values ?';
//       db.connection.query(queryString, [name], function(err, results) {
//         callback();
//       });
//     }
//   }
// };
