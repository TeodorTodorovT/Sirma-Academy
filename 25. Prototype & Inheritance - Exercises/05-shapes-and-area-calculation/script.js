class Shape {
    calcArea (){
        return `This is just a base class, implement the method in a subclass`;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calcArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    calcArea() {
        return this.sideLength * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
}


const triangle = new Triangle(10, 5);

console.log(triangle.calcArea());

const square = new Square(10);

console.log(square.calcArea());

const circle = new Circle(10);

console.log(circle.calcArea());