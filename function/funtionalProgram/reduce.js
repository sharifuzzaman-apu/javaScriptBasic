let arr =[1,2,3,4,4,44,5,66,7]

let sum=arr.reduce(function(prev,curr){
    return prev+curr
})
console.log(sum)
let max=arr.reduce(function(prev,curr){
    return Math.max(prev,curr)
})
console.log(max)