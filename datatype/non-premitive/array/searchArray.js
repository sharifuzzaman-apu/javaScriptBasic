let arr=[2,1,2,3,4,5,4,3,2,5,6,7,8]

let find=10
isFound=false
for(let i=0;i<arr.length;i++){
    if(arr[i]===find){
        console.log('found at index '+ arr[i])
        isFound=true
        break;
    }
}
if(!isFound){
    console.log('sorry')
}