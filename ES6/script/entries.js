// object theke array te conversion korte (Object.entries) use kora hoi

let obj={
    a:10,
    b:20
}
console.log(Object.entries(obj))

// Array theke object e conversion korte (Objet.fromEntries) use kora hoi
let objArr=[
    ['a',10],
    ['b',20]
]
console.log(Object.fromEntries(objArr))