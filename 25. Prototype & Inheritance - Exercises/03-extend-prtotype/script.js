function extendProto(cls) {
    cls.prototype.species = 'Human';
    cls.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

extendProto(Person);

const person = new Person('Teodor', 25);

console.log(person.toSpeciesString());
