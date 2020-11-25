// server.js
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    res.writeHead(301, {
        Location: "http" + (req.socket.encrypted ? "s" : "") + "://" +
        req.headers.host + "/poketrader-bxblue.html"
    });
    res.end();
});

// Start the server on port Heroku indicates
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0');
console.log('Node server running on port ' + PORT);
