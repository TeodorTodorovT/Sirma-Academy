class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    applyDiscount(discount) {
        this.price -= (this.price * (discount / 100));
        console.log(`Discount applied. New price of ${this.name} is $${this.price.toFixed(2)}.`);
    }
}

class Electronics extends Product {
    constructor(id, name, price, warrantyPeriod, brand) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
        this.brand = brand;
    }
}

class Clothing extends Product {
    constructor(id, name, price, size, material) {
        super(id, name, price);
        this.size = size;
        this.material = material;
    }
}

const laptop = new Electronics('E123', 'Laptop', 1200, '2 years', 'BrandX');
const tShirt = new Clothing('C456', 'T-Shirt', 20, 'L', 'Cotton');

console.log(`Original price of ${laptop.name}: $${laptop.price}`);
laptop.applyDiscount(10);

console.log(`Original price of ${tShirt.name}: $${tShirt.price}`);
tShirt.applyDiscount(20);

console.log(laptop);
console.log(tShirt);
