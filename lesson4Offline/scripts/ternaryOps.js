let age = 111;
let firstName = "anna";

if (age >= 18) {
    console.log("You can vote");
} else if (age > 15 && age < 18) {
    console.log("Wait few years you're close");
} else {
    console.log("You can't vote");
}

if (age >=18) {
    console.log("You can vote");
} else {
    if (age > 15 && age < 18) {
        console.log("Wait few years you're close")
    } else {
        console.log("You can't vote")
    }
}

console.log(age >=18 ? "You can vote": age > 15 && age < 18 ? "Wait few years you're close": "You can't vote")