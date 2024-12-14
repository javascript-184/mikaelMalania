let msCard = "5555555555554444";

let firstLetters = msCard.slice(0, 12)
console.log(msCard.replace(firstLetters, "*".repeat(firstLetters.length)))

