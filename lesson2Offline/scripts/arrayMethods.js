// const fruit = "apple";
const fruits = ["Banana", "Orange", "Apple", "Mango", 123, 444];
let size = fruits.length;
// console.log(fruits.at(4));
// console.log("Helpo");

// console.log(size);

// console.log(fruits[size - 1]);

// console.log(fruits.at(5));

// console.log(fruits.toString());

// console.log(fruits[0], fruits.join(' ')[1]);

fruits.pop()
fruits.pop()
fruits.pop()

fruits.push("Grape");
// console.log('data defore shifting =>', fruits);

// fruits.shift();
// fruits.shift();
// console.log('data after shifting =>', fruits);

fruits.unshift("Peach");
// console.log(fruits);

fruits[0] = "Pinapple";
// console.log(fruits);

delete fruits[1];
// console.log(fruits);

// fruits[2] = undefined;
// console.log(fruits);

let slicedArray = fruits.slice(3, 5);

// console.log('fruits arr before slicing ==>', fruits)
// console.log('fruits arr after slicing ==>', slicedArray);

// console.log('fruits arr before splicing ==>', fruits)
let splicedArray = fruits.splice(1, 2);
// console.log(`Successfully removed ${splicedArray} items from the fruits array`)
// console.log('fruits arr after splicing ==>', fruits);


// console.log(fruits);
let indexOfGrape = fruits.indexOf("Grape");
// console.log(indexOfGrape);

let drinks = ['coca cola', 'pepsi', 'coca cola zero', 'fanta tropic', 'Sprite', 'Chacha'];
let mergedArrays = drinks.slice(0, 2).concat(drinks.slice(3, 4)).concat(drinks.slice(5, 6));
// console.log(mergedArrays);

const myArr = [1,2,3,4, [5,6,7, [8,9,10]]];
console.log(myArr[4][3][2]);
const newArr = myArr.flat(2);

console.log(newArr);
