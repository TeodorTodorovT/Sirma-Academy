class Employee {
    constructor(name, age, salary, tasks){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.tasks = tasks;
    }
}

class Junior extends Employee {
    constructor(name, age, salary, tasks){
        super(name, age, salary, tasks);
    }

    work(){
        return `(Junior)${this.name} is working on ${this.tasks[1]}.`
    }

    getSalary(){
        return `(Junior)${this.name} just got paid $${this.salary}.`
    }
}

class Senior extends Employee {
    constructor(name, age, salary, tasks){
        super(name, age, salary, tasks);
    }

    work(){
        return `(Senior)${this.name} is working on ${this.tasks[1]}.`
    }

    getSalary(){
        return `(Senior)${this.name} just got paid $${this.salary}.`
    }
}

class Manager extends Employee {
    constructor(name, age, salary, tasks){
        super(name, age, salary, tasks);
    }

    work(){
        return `(Manager)${this.name} is working on ${this.tasks[1]}.`
    }

    getSalary(){
        return `(Manager)${this.name} just got paid $${this.salary}.`
    }
}

const junior = new Junior('Teodor', 25, 1700, ['learn react', 'learn express']);
const senior = new Senior('Petar', 35, 6000, ['fix prod', 'help junior']);
const manager = new Manager('Ivan', 37, 9000, ['join a meet', 'speak to client']);

console.log(junior.work());
console.log(junior.getSalary());
console.log(senior.work());
console.log(senior.getSalary());
console.log(manager.work());
console.log(manager.getSalary());