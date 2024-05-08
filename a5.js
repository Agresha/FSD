// write a file using json object and read the the file which gives you the same json object.
var fs = require('fs');
let jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

fs.writeFile('example.json', JSON.stringify(jsonObject), (err) => {
    if (err) {
        console.log(err);
    }
    else {
        fs.readFile('example.json', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                let parsedData = JSON.parse(data);
                console.log('JSON object read from file:', parsedData);
            }
        });
    }
});