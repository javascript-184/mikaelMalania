let users = ["nika", "buba", "gaga", "soso", "zaza", "nina", "nana"];

const ages = [32, 33, 16, 40];

for (let age of ages) {
    
}

const result = ages.filter(function(age) {
    return age >= 18
});

// console.log("Filtered Result: ", result)


users = users.map(user => {
    if (user === "gaga") {
        user = "GIGI";
    } else {
        user = user.toUpperCase();
    }

    return user;
})

// console.log(users);

let usersAtEvenIndexes = users.filter((user, index) => {

    if ((index + 1) % 2 === 0) {
        return user;
    }
});

// console.log(usersAtEvenIndexes)

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator,currentValue) 
    return accumulator + currentValue;
});

// forEach example

let users2 = ["nika", "buba", "gaga", "soso", "zaza", "nina", "nana"];

// users2.forEach(user => {
//     if (user === "gaga") {
//         console.log("Bad student found")
//     }
// })

// for (let user of users2) {
//     if (user === "gaga") {
//         console.log("Bad student found")
//     }
// }