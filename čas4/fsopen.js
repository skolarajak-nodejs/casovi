const fs = require('fs')

fs.open('data.txt', "r+", fs.constants.O_RDWR, (err, data) =>{
    if (err) throw err
    console.log(data)
})