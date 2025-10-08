function greet(msg){
    function greetings(name){
        return msg+' '+name 
    }
    return greetings
}

let gm =greet('Good Morning')
let gn=greet('good Night')



console.log(gm('apu'))


function base(b){
    return function(n){
        let result=1
        for (let i=0;i<b;i++){
            result*=n
        }
        return result
    }
}
let base5=base(5)
console.log(base5(2))
