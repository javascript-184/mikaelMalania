const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject("Random number is less than or equal to 0.5")
        }
    }, 3000);
});


console.log(myPromise);
console.log("Some other request")
console.log("Start");

myPromise.then((result) => {
    console.log(`Promise fulfilled with result: ${result}`);
}).catch((error) => {
    console.error(`Promise rejected with error: ${error}`);
}).finally(() => {
    console.log("Async process finished working!");
})

console.log(`Promise state after handling: ${myPromise}`);

console.log("End");