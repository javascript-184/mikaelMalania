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

myPromise.then((res) => {
    console.log(`Promise fulfilled with result: ${res}`);
}).catch((err) => {
    console.error(`Promise rejected with error: ${err}`);
}).finally(() => {
    console.log("Async process finished working!");
});

async function result() {
    try {
        const res = await myPromise();
        console.log("Successfully executed your request: ", res);
    } catch(e) {
        console.error(`Error code: ${e}`);
    } finally {
        console.log("Async process finished working!");
    }
}

// console.log(myPromise);
console.log("Some other request")
console.log("Start");
// async function fetchAndLogData() {
//     console.log(`Promise fulfilled with result: ${await myPromise}`);

//     // try {
//     // console.log(`Promise fulfilled with result: ${await myPromise}`);
//     // }
//     // catch (error) {
//     //     console.error(`Promise rejected with error: ${error}`);
//     // } finally {
//     //     console.log("Async process finished working!");
//     // }
// } 

// fetchAndLogData();

console.log("Some other process");