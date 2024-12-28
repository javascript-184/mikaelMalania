window.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementById("submitBtn");
    let username = document.getElementById("username");

    submitBtn.addEventListener('click', loginChecker)
    username.addEventListener('keyup', checkUsername)
})

function loginChecker() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let res = document.querySelector(".res");

    const correctUsername = "admin123";
    const correctPassword = "admin";

    if (correctUsername === username.value && correctPassword === password.value) {
        res.innerHTML = `<p style="color: green;">Login Success!</p>`
    } else {
        res.innerHTML = `<p style="color: red;">Login Fail!</p>`
    }
}

function stringWithNumber(string) {
    let res = [];

    for (let char of string) {
        res.push(Number.isInteger(Number(char)));
    }

    return res.some(item => item === true);
}

function checkUsername() {
    let currentUsername = document.getElementById("username");
    let usernameRes = document.getElementById("usernameRes");

    if (currentUsername.value.length <= 3) {
        usernameRes.style.color = "red";
        usernameRes.innerText = "Opps, username length has to be at least 3 chars long";
        submitBtn.disabled = true;
    } else if (currentUsername.value.length > 3 && !stringWithNumber(currentUsername.value)) {
        usernameRes.style.color = "red";
        usernameRes.innerText = "Opps, username should contain at least one number!";
        submitBtn.disabled = true;
    } 
    else {
        usernameRes.innerText = ""
        submitBtn.disabled = false;

    }
}

function checkPassword() {}