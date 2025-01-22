let welcomeText = document.createElement("p");

let sessionStorageToken = sessionStorage.getItem("sessionToken");

let cookieData = document.cookie;
let cookieToken = null;
cookieData = cookieData.length ? cookieData.split(" ").map(item => {
    return item.split("=")
}).forEach(cookieItem => {
         if (cookieItem[0] === "sessionToken") {
            console.log(cookieItem)
            cookieToken = cookieItem[1] 
        }
}): null;

let usersData = localStorage.getItem("usersData");
if (!usersData) {
    welcomeText.style.color = "red";
    welcomeText.textContent = "You need to be logged in to access this page!"
} else {
    if (cookieToken) {
        usersData = JSON.parse(usersData);
        for (user of usersData) {
            if (user.userToken === cookieToken) {
                welcomeText.textContent = `Welcome on the website Mr/Mrs ${user.firstName}-${user.lastName}`
                break;
            } else {
                welcomeText.style.color = "red";
                welcomeText.textContent = "You need to be logged in to access this page!"
            }
        }
    } else if (sessionStorageToken) {
        usersData = JSON.parse(usersData);
        for (user of usersData) {
            if (user.userToken === sessionStorageToken) {
                welcomeText.textContent = `Welcome on the website Mr/Mrs ${user.firstName}-${user.lastName}`
                break;
            } else {
                welcomeText.style.color = "red";
                welcomeText.textContent = "You need to be logged in to access this page!"
            }
        }
    }

}

document.querySelector('body').appendChild(welcomeText);
