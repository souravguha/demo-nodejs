var http = require('http');
var server = http.createServer(function(req, res) {
    res.write('First Server created!');
    res.end();
});
server.listen(3000);
console.log('Server started... Running on localhost:3000');