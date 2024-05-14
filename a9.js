// create http webpage on which homepage display welcome to home page student page display 
// welcome to student page and any other page display page not found
var http = require("http")
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("Welcome to home page")
        res.end()
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("Welcome to student page")
        res.end()
    }
    else {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("page not found")
        res.end()
    }
}).listen(8082)