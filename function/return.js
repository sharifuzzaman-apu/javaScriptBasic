function addAll(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }return sum
        
}

let result=addAll(1,2,3,4)
console.log(result)


function person(name,email){
    return{
        name:name,
        email:email
    }
}

let p1=person('Apu','shd@gmail.com' )
console.log(p1)