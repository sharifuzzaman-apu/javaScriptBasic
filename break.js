while(true){
    let rand= Math.floor(Math.random()*10)
    if (rand===1){
        console.log('winner')
        break
    }
    else{
        console.log(rand + ' try agin')
    }
}
for(let i=1;i<=10;i++){
    if(i%3===0){
        break
    }
    else{
        console.log(i)
    }
}