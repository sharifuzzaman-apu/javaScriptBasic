function testMe() {
    console.log(this)
}


// let obj={
//     name:'Apu',
//     age:'26',
//     print:function(){
//         console.log(this)
//     }
// }
// obj.print()

// let obj = {
//     name: 'md apu',
//     age: 26,
//     print: function () {
//         console.log('hello')
//         setTimeout(function () {
//             console.log(`hello,${this.name}`)
//         }.bind(this), 2000)
//     }
// }
// obj.print()
let obj = {
    name: 'md apu',
    age: 26,
    print: function () {
        
        setTimeout( ()=> {
            console.log(`hello,${this.name}`)
        }, 1000)
    }
}
obj.print()