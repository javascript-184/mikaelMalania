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
    return string.includes("1", "2","3", "4", "5", "6", "7", "8", "9", "0")
}

function checkUsername() {
    let currentUsername = document.getElementById("username");
    let usernameRes = document.getElementById("usernameRes");
    let submitBtn = document.getElementById("submitBtn");

    if (currentUsername.value.length <= 3) {
        usernameRes.style.color = "red";
        usernameRes.innerText = "Opps, username length has to be at least 3 chars long";
        submitBtn.disabled = true;
    } else if (currentUsername.value.length > 3 && !stringWithNumber(currentUsername.value)) {
        usernameRes.style.color = "red";
        usernameRes.innerText = "Opps, username should contain at least one number!"
        submitBtn.disabled = true;
    } 
    else {
        usernameRes.innerText = ""
        submitBtn.disabled = false;
    }
}

function checkPassword() {
    // შეამოწმეთ თუ პაროლი შედგება მინ. 8 სიმბოლოსგან,
    // შეამოწმეთ თუ პროლში რიცხვი ფიქსირდება
    // შეამოწმეთ თუ პაროლში ფიქსირდება განსხვავებული სიმბოლოები !@#$%^&*()_+
    // მომხმარებლის პაროლი სწორი იქნება თუ შეყვანილი პაროლი ზემოთ მოცემულ სამ პირობას დააკმაყოფილებს
}