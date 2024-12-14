function calculator() {
    let num1 = prompt("Enter number 1:");
    if (isNaN(num1) === true) {
        console.log("Opps, Num1 is in a incrrect format")
    } else {
        let action = prompt("Enter action:");
        let num2 = prompt("Enter number 2:");
        if (isNaN(num2) === true) {
            console.log("Opps, Num2 is in a incrrect format")
        } else {
            num1 = Number(num1);
            num2 = Number(num2);
        
            if (action === "+") {
                console.log(num1 + num2);
            } else if (action === "-") {
                console.log(num1 - num2);
            } else if (action === "*") {
                console.log(num1 * num2);
            } else if (action === "/") {
                console.log(num1 / num2);
            } else {
                console.log("Opps Incorrect operator please choose either of +,-,*,/")
            }
            
        }

    }
}

calculator()
// calculator()
// calculator()
// calculator()
// calculator()