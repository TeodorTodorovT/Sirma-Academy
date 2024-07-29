class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, hp, engineSize){
        super(make, model);
        this.hp = hp;
        this.engineSize = engineSize;
    }

    toString(){
        return `This car is a ${this.make} ${this.model}. It has an ${this.engineSize}L engine with ${this.hp}hp.`
    }
}

class Bike extends Vehicle {
    constructor(make, model, type){
        super(make, model);
        this.type = type;
    }
}

const car = new Car('Audi', 'S3', '265', '2.0');

console.log(car.toString());