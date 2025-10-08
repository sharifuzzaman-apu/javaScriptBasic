let arr=[1,2,3,4,5]
let sum=0
let f=arr.forEach(function(value,index,arr){
    console.log(value,index,arr)
    sum+=value
    
})
console.log(sum)

arr.forEach(function(value,index,arr){
    arr[index]=value+5
})


arr.forEach(function(value,index,arr){
    arr[index]=value-2
})
console.log(arr)