import * as calcModules from './calculatorModule.js'; // ES module (ESM)

// import * as example from './loginForm.js'
// const {calculate} = require('./calculatorModule.js') // CommonJS
// import { calculate } from './calculatorModule';
console.log(calcModules.calculate(1,2,"+"))

const person = {
    firstName: "abc",
    lastName: "def"
}

const { firstName } = person;

// const [a,b] = [10, 20];
let a = 10; // 20
let b = 20; // 10
[a,b] = [b,a]
console.log(a,b)
