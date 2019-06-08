// const fs = require('fs')

// function stats(file) {
//     return new Promise((resolve, reject) => {
//         fs.stat(file, (err, data) =>{
//             if(err) {
//                 return reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

// Promise.all([stats('file1'), stats('file2'), stats('file3')]).then((data) =>{
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// let message = ''

// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         message += 'my'
//         resolve(message)
//     }, 3000)
// })

// const promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         message += 'first'
//         resolve(message)
//     }, 3000)
// })

// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//         message += 'promise'
//         resolve(message)
//     }, 1000)
// })

// const printResult = (results) => {console.log(`Results ${results}`)}

// function main() {
//     Promise.all([promise1, promise2, promise3]).then(printResult)
//     Promise.all([promise2, promise1, promise3]).then(printResult)
//     Promise.all([promise3, promise2, promise1]).then(printResult)
//     console.log('\n\n////' + message)   
// }

// main()

// Promise.race([promise1, promise2, promise3]).then(value => {
//     console.log(value)
// })


const request = require('request')
let userDetails

const init = () => {
    const options = {
        url: 'https://api.github.com/users/dzuvan',
        headers: {
            'User-Agent' : 'request'
        }
    }

    return new Promise((resolve, reject) =>{
        request.get(options, (err, resp, body) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(body))
            }
        })
    })
}

const main = () => {
    const initPromise = init()
    initPromise.then(result =>{
        userDetails = result
        console.log('Initialized user details')
        console.log(userDetails)
    }, (err) =>{
        console.log(err)
    })
}

main()

