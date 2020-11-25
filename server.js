// server.js
const http = require('http');
var static = require('node-static');
var file = new static.Server();
// use the port Heroku indicates
const PORT = process.env.PORT || 3000;

http.createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(PORT || 3000);

console.log('Node server running on port ' + PORT);
