const http = require('http');
const uc = require('upper-case');

http.createServer(function (req, res)
{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase('Hola nodejs'));
}).listen(8080);