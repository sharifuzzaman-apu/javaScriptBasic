//   &&,||,!

/**
 * &&
 * t && t=t
 * t && f=f
 * f && t=f
 * f && f=f
 */

/**
 * ||
 * t || t=t
 * t || f=t
 * f || t=t
 * f || f=f
 */

let a=10
let b=20
let c=25
let d=40

// if(a>b && c>d){
//     console.log(a ,c +' a,c greater')
// }
// else{
//     console.log(b ,d +' b,d is greater')
// }

// if(a>b || c>d){
//     console.log(a ,c +' a,c greater')
// }
// else{
//     console.log(b ,d +' b,d is greater')
// }

let check =!(a>b)
console.log(check)