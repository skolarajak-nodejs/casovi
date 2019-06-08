const fs = require('fs')

let content
try {
 content = fs.readFileSync('file.md', 'utf-8')
} catch(error) {
    console.log(error)
}
console.log(content)