// setInterval(() => {
//     console.log("this function will be executed many times")
// }, 1000);

function sayHello() {
    console.log("Hello");
}

let myInterval = setInterval(sayHello, 1000);

setTimeout(() => {
    clearInterval(myInterval);
}, 6000);