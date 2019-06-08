// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve('foo')
//     }, 300)
// })

// promise.then(function(value) {
//     console.log(value)
// }).then().then().catch()

// function proba(param) {
//     if (!param) {
//         throw new Error('No param')
//     }
// }

function resolved(value) {
    console.log(value)
}

function rejected(result) {
    console.log(result)
}

Promise.reject(new Error('fail')).then(resolved, rejected).catch(err =>{
    console.log(err)
})