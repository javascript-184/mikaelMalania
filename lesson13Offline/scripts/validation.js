function submitData() {
    let firstName = document.getElementById("firstName");
    let username = document.getElementById("username");
    let password = document.getElementById("password")
    let result = document.getElementById("result")
    
    let nameValidator = /^[a-zA-Z]{2,50}$/g
    let usernameValidator = /^[a-zA-Z0-9_-]{3,16}$/
    let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/


    if (nameValidator.test(firstName.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Name validation failed";
    }

    if (usernameValidator.test(username.value) === false) {
        result.style.color = "red";
        result.innerHTML = "username validation failed";
    }

    if (passwordValidator.test(password.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Password validation failed";
    }

    if (passwordValidator.test(password.value) === true && usernameValidator.test(username.value) === true && nameValidator.test(firstName.value) === true)
    {
        alert("Success")
        result.style.color = "green";
        result.innerHTML = "you have sagol for registration brat";
    }
}