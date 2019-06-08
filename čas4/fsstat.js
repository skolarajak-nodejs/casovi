const fs = require('fs')

fs.stat('data.txt', (err, stats) =>{
    if (err) throw err
    if (stats.isFile()) {
        console.log('It\'s a file')
    }
    if(stats.isDirectory()) {
        console.log('It\'s a directory')
    }
    for (let i in stats){
        if ('function' !== typeof stats[i]) 
        console.timeLog(i + '\t' +stats[i])
    }
})

fs.rename('data2.txt', 'data2_new.txt', (err) =>{
    if (err) 
    throw err
    console.log('rename')
})

fs.chmod('data3.txt', '0777', err => {
    if (err) throw err
    console.log('file permission changed')
})

