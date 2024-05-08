// write a node js script five single digit element seperated by white space in .txt file print sorted array 
// of this five elements in term of integer a node js server
var fs = require("fs")
fs.writeFileSync("number.txt", "5 6 2 3 9")
var data = fs.readFileSync("number.txt", "utf-8")
data = data.split(" ")
var num = []
for (i = 0; i < data.length; i = i + 1) {
    num.push(parseInt(data[i]))
}
num.sort()
console.log(num)