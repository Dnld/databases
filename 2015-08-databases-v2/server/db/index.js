var mysql = require('mysql');

module.exports.connection = mysql.createConnection({
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


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


