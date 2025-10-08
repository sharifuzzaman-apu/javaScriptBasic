function add(a,b){
    return a+b
}

// stored in variable
let sum=add
// stored in array
let arr=[]
arr.push(add)
console.log(arr[0](5,4))
// stored in object
let obj={
    sum:add
}
// create function as we need like inner function
setTimeout(function(){
    console.log('i m here')
},1000)