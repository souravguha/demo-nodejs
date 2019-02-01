var http = require('http');
var server = http.createServer(function(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('Welcome to Node!\n');
    response.write('<html><body>URL was: ' + response.url + '</body></html>');
    response.end();
});

server.listen(3000);
console.log('Server started... Running on localhost:3000');