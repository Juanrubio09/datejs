const http = require('http');
const url = require('url');
const fecha = new Date();

http.createServer(function (req, res)
{
    let query = url.parse(req.url, true).query;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let language = query.language ? query.language : 'javaScrip';

    res.end(` el leguaje seleccionado es ${language}<br/>${fecha}`)

}).listen(8082);

console.log('El servidor esta funcionado en el puerto 8082', fecha);