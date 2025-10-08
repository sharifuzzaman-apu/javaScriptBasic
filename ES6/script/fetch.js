// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => {
//         console.log(e)
//     })


// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         return Promise.resolve('something')
//     })
//     .then(str => {
//         console.log(str)
//         return Promise.resolve('another something')

//     })
//     .then(another => {
//         console.log(another)
//     })
//     .catch(e => {
//         console.log(e)
//     })


// //  set time out with promise. 
// const delay=s=>new Promise(resolve=>setTimeout(resolve,s*1000))
// delay(2).then(()=>console.log('2s delay'))



