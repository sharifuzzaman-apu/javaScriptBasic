let obj1={
    x:10,
    y:20
    
}
let obj2={
    x:10,
    y:20
    
}
if(obj1.x===obj2.x && obj1.y===obj2.y){
    console.log(true)
}else{
    console.log(false)
}


console.log(obj1,obj2)
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))