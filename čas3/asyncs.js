
// function addPromise(x) {
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then((a) => {
//             doubleAfter2Seconds(20).then((b)=> {
//                 doubleAfter2Seconds(30).then((c) =>{
//                     resolve(x + a + b + c)
//                 })
//             })
//         })
//     })
// }

// addPromise(10).then(sum =>{
//     console.log(sum)
// })

function doubleAfter2Seconds(x) {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(2*x)
        }, 2000)
    })
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10)
    const b = await doubleAfter2Seconds(20)
    const c = await doubleAfter2Seconds(30)
    return x + a + b + c
}

addAsync(10).then(sum => {
    console.log(sum)
})