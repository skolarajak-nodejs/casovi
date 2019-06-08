const fs = require('fs')

const traverseFunction = currentPath => {
    console.log(currentPath)
    const files = fs.readdirSync(currentPath)
    for (let i in files) {
        const currentFile = currentPath + '/' + files[i]
        const stats = fs.statSync(currentFile)
        if (stats.isFile()) {
            console.log(currentFile)
        } else if (stats.isDirectory()) {
            traverseFunction(currentFile)
        }
    }
}

traverseFunction('..')