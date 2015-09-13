var mysql = require('mysql');
//var chatterBoxServer = require('./chatterbox-server/client/scripts/app.js');

module.exports.connection = mysql.createConnection({
  // host     : 'localhost',
  user     : 'root',
  database : 'chat',
  password : ''
});
 
module.exports.connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connected to mysql');
  }
});

// module.exports = connection;
// exports.connection.connect(function(err) {
//   if (err) {
//     console.log('not connected, err: ', err);
//   } else {
//     console.log('connected');
//   }
// });

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


