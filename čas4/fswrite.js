const fs = require('fs')

fs.writeFile('data.txt', 'Test', err=>{
    if (err) throw err
})