var http = require('http');
var modules = require('./modules.js');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    var result1 = modules.sum(2,5);
    var result2 = modules.checkPrime(23);
    console.log('Request received');
    res.write('Result for Addition: ' + result1 + '<br>');
    res.write('result for checking Prime number: ' + result2 + '<br>');
    res.end("<html><body>The request URL is: " + req.url + "</body></html>");
});

server.listen(3000);
console.log("Server is running at port 3000");