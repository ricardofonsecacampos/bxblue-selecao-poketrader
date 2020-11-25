// server.js
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('poketrader-bxblue.html').pipe(res)
})

console.log('Node server running on port ' + PORT);
