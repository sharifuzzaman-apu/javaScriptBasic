function add(a,b){
    result=a+b
    console.log(result)
}

add(3,5)


function sub(a,b){
    result=a-b
    console.log(result)
}

sub(5,3)



let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]

function sumOfArray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)


// when data is unknown "arguments" will be used

function addAll(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }console.log(sum)
        
    
}
addAll(1,2,3,4,5,6)