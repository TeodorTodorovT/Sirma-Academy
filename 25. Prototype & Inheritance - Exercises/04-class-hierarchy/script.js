function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return `No area, this is a base figure`;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Fiure unite type: ${units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `Figure Cirlce with radius ${this.radius}${this.units} has an area of ${this.area.toFixed(2)}${this.units}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figure Rectangle with sides ${this.width}${this.units} and ${this.height}${this.units} has an area of ${this.area.toFixed(2)}${this.units}`;
        }
    }

    return {Figure, Circle, Rectangle}
}

const {Figure, Circle, Rectangle} = classHierarchy();

const circle = new Circle(5);

console.log(circle.toString());

circle.changeUnits('mm');

console.log(circle.toString());


const rectangle = new Rectangle(5, 10);

console.log(rectangle.toString());