// let arr=[1,2,3,4,5]
// console.log('given array='+ arr)
// console.log('0 index='+ arr[0])
// arr[0]=10
// arr[10]=0
// console.log('legth '+arr.length)
// console.log('modified array='+ arr)
// // array constructor
// let arr2=Array(1,2,3)
// console.log(arr2)

// array traverse

let arr = [4, 5, 6, 7, 1, 2, 3]
// for(let i=0;i<arr.length;i++){


//     arr[i]=arr[i]*2
//     console.log(arr[i])

// }
// console.log(arr)

let sum = 0
for (let i = 0; i < arr.length; i++) {
    console.log(sum + '+' + arr[i] + '=' + (sum + arr[i]))
    sum += arr[i]
} console.log(sum)


for (let i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i])
    }else{
        console.log('vagses='+arr[i]%2)
    }
} 
