// @ts-check
"use strict";


function voteChecker(age, name) {
    if (age >= 18 && name === "kate" || name === "ketevan") {
        return "Thats great kate, now you can vote!"
        // amis qvevit araferi ar gaeshveba
    } else if (age < 18 && name !== "kate" || name !== "ketevan") {
        return `Sorry ${name} but you must me at least 18 years old to vote!`;
    } else {
        return "I dont know what to do";
    }
}

// console.log(voteChecker(19, "kate")[0]);
// let result = voteChecker(19, "kate");
// // voteChecker(12, "tako");

// console.log(result[0])
// const x = 5;
// x= 10;

const passwordChecker = function(password) {
    if (password.length <=7) {
        return "This password is too weak, please try something else";
    } else {
        return "Great Choice!"
    }
}

let usernameChecker = (username, password="123") => {
    let db = ["fluffyPanda", "FlyingDragon", "Jango", "Jinja", "coderNinja"];

    if (username !== undefined) {
        if (db.includes(username) === true) {
            return "This username is used";
        } else {
            return "You can use this username";
        }
    } else if (username === undefined) {
        return "Please provide use the username";
    }
};
let randomVar;
console.log(usernameChecker("anna"));