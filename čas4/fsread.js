const fs = require('fs')

fs.readdir('.', (err, files) => {
    if (err) throw err
    for (let index in files) {
        console.log(files[index])
    }
})
