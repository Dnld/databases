var db = require('../db');

// exports.handlePost = handlePost = function(request, callback) {
//   var requestBody = '';
//   request.on('data', function(data) {
//     requestBody += data;
//   });
//   request.on('end', function() {
//     message = JSON.parse(requestBody);
//     callback(message);    
//   });
//   request.on('error', function(error) {
//     console.log(error);
//   });
// };

// exports.addMessageToDatabase = addMessageToDatabase = function(message) {
//   console.log(message);  
// };

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function() {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
