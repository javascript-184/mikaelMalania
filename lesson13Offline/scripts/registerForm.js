// import { generateString } from "./stringGenerator.js";
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function handleRegistration() {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let regForm = document.getElementById('registerForm');
    let errorMessage = document.getElementById("error");
    let result = document.getElementById("result")
    let savePassword = document.getElementById("savePass").checked;

    let nameValidator = /^[a-zA-Z]{2,50}$/g
    let usernameValidator = /^[a-zA-Z0-9_-]{3,16}$/
    let passwordValidator = /^[A-Z](?=.*[A-z])(?=.*\d)(?=.*[@!#$%?&*])[A-z\d]{8,}[A-z@!#$%?&*]{1,}$/gm
    // console.log(nameValidator.test(firstName.value)===false)

    if (nameValidator.test(firstName.value + lastName.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Name validation failed";
        console.log("name validation failed")

    } else {
        if (usernameValidator.test(username.value) === false) {
            result.style.color = "red";
            result.innerHTML = "username validation failed";
            console.log("username validation failed")
        } else {
            if (passwordValidator.test(password.value) === false) {
                console.log(passwordValidator.test(password.value), password.value)
                result.style.color = "red";
                result.innerHTML = "Password validation failed";
            } else {
                        console.log("All passed")
                        result.innerHTML = '';
                        let oldUsersData = localStorage.getItem('usersData');
                        oldUsersData = JSON.parse(oldUsersData);            

                        const newUserToken = generateString(36);

                        let newUser = {
                            firstName: firstName.value,
                            lastName: lastName.value,
                            username: username.value,
                            password: password.value,
                            userToken: newUserToken,
                        }

                        if (oldUsersData === null) {
                            localStorage.setItem('usersData', JSON.stringify([newUser]));
                            handleSessionToken(newUserToken);
                            window.location.href = './profilePage.html';
                        } else {
                                for (let user of oldUsersData) {
                                    if (user.username === username.value) {
                                        errorMessage.style.color = "red";
                                        errorMessage.innerHTML = "This username is already used!"
                                    } else {
                                        oldUsersData.push(newUser);
                                        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
                                        handleSessionToken(newUserToken);
                                        window.location.href = './profilePage.html';
                                    }
                                    break;
                                }
                        }

                    
            }
        }
    }
      


    function handleSessionToken(newUserToken) {
        if (savePassword === true) {
            // create new cookie file with the length of 5 days
            let timeNow = new Date();

            timeNow.setTime(timeNow.getTime() + (5 * 24 * 60 * 60 * 1000)); // expires in 5 days

            let expires = "expires=" + timeNow.toUTCString();

            document.cookie = `sessionToken=${newUserToken}; ${expires};  path=/`;

        } else {
            // save password in a session storage
            localStorage.setItem('sessionToken', newUserToken);
        }
    }
}
