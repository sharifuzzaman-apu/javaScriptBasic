class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // call parent constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}

let s1 = new Student("Rahim", 18, "12th");
s1.greet();   // inherited method
s1.study();   // own method
