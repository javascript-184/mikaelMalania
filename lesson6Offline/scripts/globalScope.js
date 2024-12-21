// Scope ნიშნავს ხილვადობის არეალს.
var globalVar = "I am global scoped variable";
function accessGlobal() {
    console.log(globalVar);
    let blockVar = "I am block scoped variable";
}

let number = 10;

if (number === 10) {
    var welcomeText = "Welcome here";
    if (true) {
        welcomeText.at(0);
    }
}
console.log(welcomeText)
// console.log(blockVar);

accessGlobal()

let temp = prompt("Enter weather temperature");
temp = Number(temp)

let res = "";
if (temp >= 25 ) {
    res = "You can wear a T-Shirt";
    var result = "You can wear a T-Shirt";
} else if (temp > 10 && temp < 25) {
    res = "You can wear a coat";
    var result = "You can wear a coat";
} else {
    res = "You can wear a winter coat and sharf";
    var result = "You can wear a winter coat and sharf";
}

console.log(res, result);