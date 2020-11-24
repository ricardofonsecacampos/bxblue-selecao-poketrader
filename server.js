// server.js
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Servidor NodeJS do PokeTrader!\n');
});

// Start the server on port Heroku indicates
const PORT = process.env.PORT || 3000;

app.listen(PORT, '127.0.0.1');
console.log('Node server running on port ' + PORT);
