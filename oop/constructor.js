

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`hi ${this.name},${this.age}`)
    }

}
let p1=new Person('apu',26)
p1.greet()

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    
    }
    study(){
        console.log(`${this.name},${this.age},${this.grade}`)
    }
}

let s1=new Student('md',25,'12th')
s1.study()