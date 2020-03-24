const http = require('http');
const os = require('os');

console.log("Kubia server starting ...");
var handler = function(request, response){
    console.log("Receive Request from "+ request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You ' ve hit " + os.hostname()+"\n");
}

var app = http.createServer(handler);
app.listen(8080);
