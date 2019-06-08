const fs = require('fs')
const path = require('path')

const relative = path.relative('target/to/symlink', 'app.json')
fs.symlink(relative, 'symlink/dir', err=>{
    if(err)
    throw err
})