// function sayHello() {
//     console.log("Hello, World");
// }

// sayHello()

function welcomeUser(firstName, lastName, age=18) {
    if (firstName === undefined || lastName === undefined) {
        console.log("You're missing a required parameter")
    } else {
        console.log(`Hello, ${firstName} ${lastName} you're ${age} years old`)
    }
}
// welcomeUser("Giorgi", "Gogenia", 25)    

// ისეთი ფუნქცია რომელიც შედეგს არ აბრუნებს return-ბრძანების მეშვეობით იწოდება როგორც void (ცარიელი) ფუნქცია
function milesToKm(miles) {
    miles = Number(miles);

    return miles * 1.6;
}

// console.log(milesToKm(5)+15);

let userPrompt = prompt("Enter distance in miles:") // "15"

function kmToMeters() {
    return milesToKm(userPrompt) * 1000;
}

// console.log(kmToMeters())

function canPersonVote(age) {
    if (age < 18) {
        // აქ შეიძლება სხვა რამეები ხდებოდეს
        return "You cant vote";
    } else if (age >= 18) {
        return "You can vote";
    }
}

// console.log(`Distance in km is ${milesToKm(userPrompt)}`)
// console.log(`Distance in meters is ${kmToMeters()}`)