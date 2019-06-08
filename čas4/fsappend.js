const fs = require('fs')

fs.appendFile('data2.txt', '\nHello', err =>{
    if(err) throw err
})