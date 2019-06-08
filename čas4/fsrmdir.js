const fs = require('fs')

fs.rmdir('my', err =>{
    if (err) throw err
})