let person={
    name:'apu',
    email:'asg@gmail.com',
    address:{
        city:'Dhaka',
        country:'bangladesh'
    }
}
// object er jnno left side e object notation=right side e object name
// let {name,email,address,address:{city,country}}=person
// console.log(name,city)
for(let key in person){
    console.log(key+':'+person[key]);
}

// array destructuring is not useful