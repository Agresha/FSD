var fs = require("fs")
fs.writeFile("pqr.txt", "Today is a long day\n",
    () => {
        fs.appendFile("pqr.txt", "is it?",
            () => {
                fs.readFile("pqr.txt", (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(data.toString())
                    }
                })
            })
    }
)