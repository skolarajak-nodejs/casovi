const fs = require('fs')

fs.mkdir('my/first/dir',{recursive: true}, err =>{
    if (err)
    throw err
})

const os = require('os')
const path = require('path')

fs.mkdtemp(path.join(os.tmpdir(), 'my'), (err, data) => {
    if (err) throw err
    console.log(data)
})