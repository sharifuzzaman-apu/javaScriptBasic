// scope=function er vitore same variable decleare kora jai.

let a = 'abc'
function x() {
    let a = 10
    function y() {
        let a = 5
        console.log(a)
    } console.log(a)
    y()

} console.log(a)
x()

function test(n) {
    function a() {
        return n % 3 === 0
    }
    function b() {
        return n % 5 === 0
    }

    if (a() && b()){
        console.log(true)
    }else{
        console.log(false)
    }
}
test(15)