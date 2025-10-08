let i=0
while (i<10){
    console.log(i+' apu')
    i++
}

let isRunning=true

while(isRunning){
    let rand= Math.floor(Math.random()*10)
    if (rand===1){
        console.log('winner')
        isRunning=false
    }
    else{
        console.log(rand + 'try agin')
    }
}


