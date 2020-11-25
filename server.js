// server.js
const http = require('http');
const fs = require('fs')
// use the port Heroku indicates
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('poketrader-bxblue.html').pipe(res)
}).listen(PORT);

console.log('Node server running on port ' + PORT);
