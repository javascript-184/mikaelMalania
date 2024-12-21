class Vehicle {
    constructor(make) {
        this.make = make;
    }

    start() {
        console.log(`${this.make} is starting now`)
    }
}

class Car extends Vehicle {
    drive() {
        console.log(`${this.make} is driving now.`)
    }
}

const car = new Car("Toyota");

car.start()
car.drive()