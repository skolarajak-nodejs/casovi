const numbers = [6, 1,2,3,4]

function isBiggerThanTwo(num) {
    return num > 2
}

const result = numbers.filter((num) => (num>2))

console.log(result)