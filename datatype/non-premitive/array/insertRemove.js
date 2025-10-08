let arr=[1,2,3,4,5,6,7,8,9]

// insert

// insert at the index
arr[3]=3
// insert at the last
arr.push(9)
// insert at the first
arr.unshift(9) 

// add at the selected place
// arr.splice(index number,element number,add element,if another)
arr.splice(6,0,5,6)
// console.log(arr)

let arr2=[1,2,3,4,5,6,7,8,9]
// remove

// undefined
arr2[1]=undefined
// remove last element
arr2.pop()
// remove first element
arr2.shift()

// remove from the selected place
arr2.splice(3,1,44)
console.log(arr2)

