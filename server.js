// server.js

const http = require('http');
const fs = require('fs');
const url = require('url');
//const querystring = require('querystring');

// use the port Heroku indicates
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url,true).pathname
  
  if (pathname.indexOf('/save?') > -1) {
    // gravar troca no banco.
    console.log('Save one trade ' + url.parse(req.url,true).query);
    
  } else if (req.path.indexOf('/list') > -1) {
    // mostrar histórico.
    console.log('List trades ' + url.parse(req.url,true).search);
    
  } else {
    // servir a página da aplicação de troca.
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('poketrader-bxblue.html').pipe(res)
  }
}).listen(PORT);

console.log('Node server running on port ' + PORT);
