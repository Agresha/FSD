// write node js to create file name temp.txt check if physical memory is greater than 1 gb then print 
// message sufficient memory or print message low memory in a file
var os = require("os")
var ps = require("fs")
freemem = os.freemem() / 1024 / 1024 / 1024
if (freemem > 1) {
    ps.writeFileSync("temp.text", "Sufficient memory")
}
else {
    ps.writeFileSync("temp.txt", "low memory")
}