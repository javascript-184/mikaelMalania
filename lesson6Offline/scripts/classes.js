let name = "Mikael"; 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() { // კლასში არსებულ ფუნქციას ეწოდება მეთოდი.
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const person = new Person("Nia", 34);
person.greet();

class SizeConverter {
    constructor(name) {
        this.name = name;
    }

    cmToDm(cm) { // კლასში არსებულ ფუნქციას ეწოდება მეთოდი.
        let res = cm / 10;
        return `Welcome dear ${this.name} result is ${res}`;
    }   

    cmToM(cm) {
        return `Welcome dear ${this.name} result is ${cm / 100}`;
    }

    mmToCm(mm) {
        return `Welcome dear ${this.name} result is ${mm * 10}`;
    }

    mToKm(meters) {
        return `Welcome dear ${this.name} result is ${meters / 1000}`;
    }
}

const sizeConverter = new SizeConverter("Nika"); // Here we create a new instance of class

console.log(sizeConverter.cmToDm(50));