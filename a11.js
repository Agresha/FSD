// write a  node js script to perform tsk as ask 1.create one page with two links home and about
// 2.both the pages must contain html type content and add required content on both the pages
// if user add any other url then there should be a message page not found
// create http webpage on which homepage display welcome to home page student page display 
// welcome to student page and any other page display page not found
var http = require("http")
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("<a href=/home>Home</a><br>")
        res.write("<a href=/student>Student</a>")
        res.end()
    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("<h1>Welcome to home page</h1>")
        res.end()
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("<h1>Welcome to student page</h1>")
        res.end()
    }
    else {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write("page not found")
        res.end()
    }
}).listen(8083)