class Animal {
    speak() {
        console.log("This animal can make a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(animal => animal.speak());