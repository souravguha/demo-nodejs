var http = require('http');
var server = http.createServer(function(req, res) {
    console.log('Request received.');
    res.write('Welcome to Node!\n');
    res.write('<html><body>URL was: ' + req.url + '</body></html>');
    res.end();
});
server.listen(3000);
console.log('Server started... Running on localhost:3000');