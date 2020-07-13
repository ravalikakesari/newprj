const withCount = fn => {
    let count = 0
    return (...args) => {
        console.log('Call count: ${++count}')
        return fn(...args)
    }
}
const add = (x, y) => x+y 
const counteAdd = withCount(add)
console.log(counteAdd(1, 2))
console.log(counteAdd(2, 2))
console.log(counteAdd(3, 2))