console.log("Start");

setTimeout(function() {
    console.log("Async operation N1 done");
}, 5000);

setTimeout(function() {
    console.log("Async operation N2 done");
}, 3000);


console.log("End");