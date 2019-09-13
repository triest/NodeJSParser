var http = require("http");
var parser = require("./parserBody.js");
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    parser.test();
    response.end('Hello World\n');
}).listen(8082);

// Console will print the message


