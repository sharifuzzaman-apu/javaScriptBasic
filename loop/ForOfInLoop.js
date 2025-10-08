
let person = { name: "Apu", age: 22, city: "Dhaka" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}


let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

