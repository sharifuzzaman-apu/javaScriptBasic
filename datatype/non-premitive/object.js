let obj={}
let point={
    x:10,
    y:20
}

// data update
point.y=50
point['x']=100

// data insert
point.z=30

// console.log(point)

// object constructor
let obj1=Object()
obj1.a=1
console.log(obj1)


// "new" keyword
let obj2=new Object()
obj2.a=1
console.log(obj2)


// remove by delete
delete point.x
console.log('removed data '+ point)
