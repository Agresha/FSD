var http = require("http")
fs = require("fs")
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-Type': 'image/jpg' })
    img = fs.readFileSync("download.jpg")
    res.end(img)
}).listen(5054)