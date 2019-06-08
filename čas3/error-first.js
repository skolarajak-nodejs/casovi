const fs = require('fs')

console.log('starting file read')
fs.readFile('file.md', 'utf-8', function(err, content){
    if (err) {
        console.log(err)
    }
    console.log(content)
})