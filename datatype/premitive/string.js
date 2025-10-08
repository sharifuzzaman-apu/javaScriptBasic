// let str = 'String'
// let str2 = "String"
// let str3 = `String`

// // console.log(str, str2, str3)

// // string constructor
// let n = 10
// let str4 = String(n)
// console.log(str4)

// // escape notation
// let str5='this is a \'string\''
// let str6='this is a \nstring'
// let str7='this is a \tstring'
// console.log(str5,str6,str6)

// string comparison

let firstName = 'Md'
let lastName = 'Apu'

let fullname = firstName.concat(' ', lastName)

console.log(fullname)
let subsTract = fullname.substr(2)
console.log(subsTract)
console.log(fullname.charAt(3))

console.log(fullname.toLocaleLowerCase().startsWith('md'))
console.log(fullname.toLocaleUpperCase().endsWith('U'))

console.log('   ahsd   '.trim())
console.log(fullname.split(''))
console.log(fullname.length)

let length=0
while(true){
    if(fullname.charAt(length)==''){
        break
    }else{
        length++
    }
}
console.log(length)



