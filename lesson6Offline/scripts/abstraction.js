class Shape {
    calculateArea() {
        throw "Method is not implemented yet";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(10)
console.log(circle.calculateArea())