const fs = require('fs')

fs.truncate('data2.txt', 10, err =>{
    if (err) throw err
})