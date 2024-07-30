class Device {
    constructor(brand, model, batteryLife) {
        this.brand = brand;
        this.model = model;
        this.batteryLife = batteryLife;
    }

    charge() {
        console.log(`${this.brand} ${this.model} is charging.`);
    }

    turnOn() {
        console.log(`${this.brand} ${this.model} is now on.`);
    }
}

class Smartphone extends Device {
    constructor(brand, model, batteryLife, screenSize, os) {
        super(brand, model, batteryLife);
        this.screenSize = screenSize;
        this.os = os;
    }

    charge() {
        console.log(`${this.brand} ${this.model} with ${this.screenSize} inch screen and ${this.os} is charging. It will take approximately 2 hours.`);
    }
}

class Smartwatch extends Device {
    constructor(brand, model, batteryLife, strapMaterial, waterResistance) {
        super(brand, model, batteryLife);
        this.strapMaterial = strapMaterial;
        this.waterResistance = waterResistance;
    }

    charge() {
        console.log(`${this.brand} ${this.model} with ${this.strapMaterial} strap and ${this.waterResistance} water resistance is charging. It will take approximately 1 hour.`);
    }
}

const myPhone = new Smartphone('Apple', 'iPhone 12', '20 hours', 6.1, 'iOS');
const myWatch = new Smartwatch('Samsung', 'Galaxy Watch', '48 hours', 'leather', '5 ATM');

myPhone.charge();
myPhone.turnOn();

myWatch.charge();
myWatch.turnOn();
