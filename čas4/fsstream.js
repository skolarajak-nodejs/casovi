const fs = require('fs')
// const writableStream = fs.createWriteStream('original.txt')
// const readStream = fs.createReadStream('copy.txt')

// readStream.pipe(writableStream)

const zlib = require('zlib')

fs.createReadStream('original.txt.gz.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('original.txt'))