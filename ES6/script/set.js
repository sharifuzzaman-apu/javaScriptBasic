// let set=new Set([1,2,3])
// console.log(set)

let set=new Set([1,2])
set.add(5)
set.add(6)
console.log(set)
console.log(set.size)

set.clear
set.delete(1)
console.log(set.has(5))