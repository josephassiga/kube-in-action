const http = require('http');
const os = require('os');

console.log("Kubia server starting ...");

var requestCount = 0;

var handler = function(request, response){
    console.log("Receive Request from "+ request.connection.remoteAddress);
     requestCount++;
    if( requestCount > 5 ) {
        response.writeHead(500);
        response.end("I'm not well. Please restart me!\n");
        return;
    }

    response.writeHead(200);
    response.end("You ' ve hit " + os.hostname()+"\n");
}

var app = http.createServer(handler);
app.listen(8080);
