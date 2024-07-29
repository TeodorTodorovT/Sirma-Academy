class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }
}


const student = new Student('Teodor', '25', '2ro');

console.log(student);