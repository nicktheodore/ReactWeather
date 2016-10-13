// Have access to entire express api. require() takes the string name of the module
var express = require('express');

// Create our app
// Call the express library as a function, passing no args.
var app = express();

// Specifies folder name we want to expose to the server.
app.use(express.static('public'));

// Start the server with app.listen() takes port and a function that's called when the server is up.
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
