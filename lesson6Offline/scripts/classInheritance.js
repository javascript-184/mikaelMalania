class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `those ${this.make} ${this.model} cars made in ${this.year} are super cool!` 
    };
}

class BMW extends Car {
    constructor(model, year, series) {
        super(model, year, series);
        this.year = series;
    }

    displayInfo() {
        return `Like I said this ${super.displayInfo()}`
    }
}

const genericCar = new Car('Generic', 'model', 2021);
const coolBmw = new BMW("X5", 2020, "series 3");

console.log(genericCar.displayInfo())
console.log(coolBmw.displayInfo())