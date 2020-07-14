//mutable =can be changed after creation
//immutable =can not be changed after creation

const a = [1, 2, 3]
const b = a
//console.log(a == b) in this it takes the referns of a

b.push(4)
console.log(a)
