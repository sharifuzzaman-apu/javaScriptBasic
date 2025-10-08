let addition=function(a,b){
    return a+b
}

setTimeout(function(){
    console.log('i will call after 5 sec')
},5000)

let another=addition
console.log(another(7,8))