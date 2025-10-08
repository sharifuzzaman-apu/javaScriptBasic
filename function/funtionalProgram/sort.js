let arr=[1,2,3,4,4,44,5,66,7,-33,-4,-55,-6]
// arr.sort()
// console.log(arr)
let ascending=arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else{
        return 0
    }
})
console.log(ascending)
let descending=arr.sort(function(a,b){
    if(a>b){
        return -1
    }
    else if(a<b){
        return 1
    }
    else{
        return 0
    }
})
console.log(descending)


let even=arr.every(function(value){
    return value%2===0
})
console.log(even)


let negative=arr.every(function(value){
    return value<=0
})
console.log(negative)



let person=[
    {
        name:'arik',
        age:24
    },
    {
        name:'zahid',
        age:23
    },
    {
        name:'Shimul',
        age:14
    },
    {
        name:'dhaka',
        age:44
    }
]

let ascAge=person.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(ascAge)

let ascName = person.sort(function(a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA > nameB) {
        return 1;
    } else if (nameA < nameB) {
        return -1;
    } else {
        return 0;
    }
});

console.log(ascName);


