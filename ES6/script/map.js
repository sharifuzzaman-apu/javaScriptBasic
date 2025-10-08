let map=new Map([
    ['a',20],
    ['b',30],
    ['c',40]
])

map.set('d',40)
map.delete('c')

console.log(map)

console.log(map.get('b'))

let person = {
    name: "Sharif",
    age: 25,
    city: "Dhaka"
};

Object.entries(person).map(([key,value]) => {
    console.log(key+':'+value );
});


let students = [
    { id: 1, name: "Apu", age: 20 },
    { id: 2, name: "Sharif", age: 22 },
    { id: 3, name: "Nayeem", age: 21 },
    { id: 4, name: "Rafi", age: 23 },
    { id: 5, name: "Sami", age: 19 },
    { id: 6, name: "Tania", age: 20 },
    { id: 7, name: "Rumi", age: 22 },
    { id: 8, name: "Kabir", age: 21 },
    { id: 9, name: "Hasan", age: 24 },
    { id: 10, name: "Mehedi", age: 23 }
];

students.map(students=>{
    console.log(students.name)
})


let data = {
  teacher: "Mr. Rahman",
  subjects: ["Math", "English", "Science"],   // array
  student: {
    id: 101,
    name: "Apu",
    marks: {
      math: 90,
      english: 85,
      science: 88
    }
  }
};
// map array inside objects
data.subjects.map(sub => console.log("Subject:", sub));
// map object inside objects
Object.keys(data.student).map(key=>console.log('key:'+key))
// map inside nested object
Object.entries(data.student.marks).map(([subject])=>{console.log('subject:'+subject)})