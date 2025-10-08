// for (let i = 0; i < 10; i++) {
//     console.log((i + 1) + ' apu')
// }
// for (let i = 4; i < 20; i += 2) {
//     console.log((i) + ' apu')
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 1) {
//         console.log(i+' odd') 
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i+' even') 
//     }
//     else{
//         console.log(i+' odd')
//     }
// }


let sum = 0;

for (let i = 1; i <= 10; i++) {
    console.log(sum + '+' + i + '=' + (sum + i))
    sum += i;
}
console.log('result='+sum)
