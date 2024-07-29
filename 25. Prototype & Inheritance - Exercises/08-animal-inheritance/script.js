class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating!`
    }

    sleep(){
        return `${this.name} is sleeping!`
    }
}

class Dog extends Animal {
    constructor(name,age){
        super(name,age);
    }

    bark(){
        return `Dog ${this.name} (${this.age} yo) is barking!`;
    }
}

class Cat extends Animal {
    constructor(name,age){
        super(name,age);
    }

    meow(){
        return `Cat ${this.name} (${this.age} yo) is meowing!`;
    }
}

const dog = new Dog("Sharo", "2");
const cat = new Cat("Simba", "3");

console.log(dog.bark());
console.log(cat.meow());

console.log(dog.sleep());
console.log(cat.eat());