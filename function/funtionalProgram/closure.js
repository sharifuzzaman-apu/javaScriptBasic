// kono scope er vitore bairer kono scope theke data asle seta closure
let b=10
function a(){
    let x=5
    return function(){
        console.log(x)
    }
}
let abc=a()
console.dir(abc)