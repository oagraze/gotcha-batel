const http = require('http');


http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('404 | Page not found');
    res.end();

})
.listen(8080);

console.log('escuchando en el puerto 8080');
