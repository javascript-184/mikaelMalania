function submitUserData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let birthDate = document.getElementById('birthDate').value;
    let registerForm = document.querySelector('form') // ამით შეგიძლია წამოიღო ელემენტზე ინფორმაცია კლასის სახელით, აიდით, ან ტეგის სახელით.
    // form tag event handler - to prevent default action (page reload)

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('birthDate', birthDate);

    console.log(username, password);
}