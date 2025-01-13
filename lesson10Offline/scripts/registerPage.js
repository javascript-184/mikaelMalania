function registerUser() {
    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);
    
    let person = {};

    inputs.forEach((input, index) => {
        if (index === 0) {
            person.username = input.value;
        } else if (index === 1) {
            person["password"] = input.value;
        } else if (index === 2) {
            person.firstName = input.value;
        } else if (index === 3) {
            person.lastName = input.value;
        }
    });

    let regUsers = localStorage.getItem("regUsers");

    if (regUsers === null) {
        localStorage.setItem("regUsers", JSON.stringify([person]))
    } else {
        let oldRegUsers = localStorage.getItem("regUsers");
        oldRegUsers = JSON.parse(oldRegUsers);

        oldRegUsers.push(person);

        localStorage.setItem("regUsers", JSON.stringify(oldRegUsers));
    }
    
}