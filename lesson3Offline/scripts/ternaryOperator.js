// normal if statement

let age = 18;
let user = "kate";

if (age >= 18 && user === "kate" || user === "ketevan") {
    console.log("Thats great kate, now you can vote!");
} else {
    console.log("You must me at least 18 years old to vote!");
}
// same if statement but with ternary operator


(age >= 18 && user === "kate" || user === "ketevan") ? console.log("Thats great kate, now you can vote!") : console.log("You must me at least 18 years old to vote!");