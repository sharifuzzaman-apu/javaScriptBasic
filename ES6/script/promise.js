// let p1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,5000,'one')
// })
// console.log(p1)
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,3000,'two')
// })
// console.log(p2)

// // reject=catch
// // resolve=then

// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// p2.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

function getIphone(isPassed){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve('got it')
            }
            else{
                reject(new Error('you have failed'))
            }
        },2000)
    })
}
getIphone(false)
    .then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error.message)
    })

