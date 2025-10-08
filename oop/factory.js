function createPerson(name, age) {
    return {
        name, age,
        // greet() {
        //     console.log(`hi ${this.name},${this.age}`)
        // }
    }
}

function createStudent(name, age, grade) {
    let person = createPerson(name, age)
    return {
        ...person, grade,
        study() {
            console.log(`${this.name},${this.age},${this.grade}`)
        }
    }
}

let s1=createStudent('apu',12,'13th')
s1.study()
