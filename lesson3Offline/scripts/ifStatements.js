// let isShopOpen = true;

// if (isShopOpen === true) {
//     console.log("Great! I can go to the shop!");
// };

// let age = 18;
// let user = "kate";

// if (age >= 18 && user === "kate" || user === "ketevan") {
//     console.log("Thats great kate, now you can vote!");
// } else if (age < 18) {
//     console.log("You must me at least 18 years old to vote!");
// } else {
//     console.log("I dont know what to do");
// }

let isShopOpen = true;
let zaraAvailable = false;
let nikeAvailable = false;

// "===" ჯავასკრპიტში გიჩვენებს მის მარცხივ არსებულ მონაცემს უდრის თუ არ უდრის მის მარჯვნივ არსებული მონაცემი.
if (isShopOpen === true && zaraAvailable === true) {
    console.log("Im going to buy a zara clothes");
} else if (isShopOpen === true && zaraAvailable === false && nikeAvailable === true) {
    console.log("Im going to buy some nike clothes");
} else {
    console.log("Why is this shop empty");
}