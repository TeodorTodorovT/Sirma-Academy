
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, grade, school) {
        super(name, age);
        this.grade = grade;
        this.school = school;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade} at ${this.school}.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject, salary) {
        super(name, age);
        this.subject = subject;
        this.salary = salary;
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

const student = new Student('Alice', 14, '8th', 'Greenwood High');
const teacher = new Teacher('Mr. Smith', 40, 'Mathematics', 50000);

student.study();
teacher.teach();

console.log(student);
console.log(teacher);
