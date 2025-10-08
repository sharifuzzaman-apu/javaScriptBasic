let arr =[1,2,3,4,4,44,5,66,7]
let result=arr.find(function(value){
    return value===4
})
console.log(result)
let index=arr.findIndex(function(value){
    return value===4
})
console.log(index)