const http = require('http');
const url = require('url');
const fecha = new Date();

http.createServer(function (req, res)
{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    const x = url.parse(req.url, true).query;
    const txt = x.year + "" + x.month;
    res.end(txt)

}).listen(8085);

console.log('el servidor esta funcionadno en el puerto 8085', fecha);