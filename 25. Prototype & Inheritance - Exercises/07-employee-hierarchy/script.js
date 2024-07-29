class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    calcBonus(){
        return `Base salary is ${this.salary}, manager bonus is 10%, new salary is ${this.salary * 1.10}`;
    }
}

class Engineer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    calcBonus(){
        return `Base salary is ${this.salary}, engineer bonus is 7%, new salary is ${this.salary * 1.07}`;
    }
}

const manager = new Manager("Teodor", "1000");
const engineer = new Engineer("Dimitar", "1000");

console.log(manager.calcBonus());
console.log(engineer.calcBonus());
