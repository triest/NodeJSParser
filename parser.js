var http = require('http')
var parser = require('./parserBody.js')
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    let arrayLinks
    parser.test().then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    }).then(parser.parseMatch(result))

    // parser.parseMatch(arrayLinks)
    response.end('Hello World\n')
}).listen(8082)

// Console will print the message


