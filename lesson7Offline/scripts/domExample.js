let paragraph1Value = document.getElementById("paragraph1");
// console.log(paragraph1Value.textContent);
paragraph1Value.textContent = "This data has been changed";
paragraph1Value.style.textAlign = 'center';
paragraph1Value.style.color = "#f6ff07";
paragraph1Value.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 1)";
paragraph1Value.innerHTML = `<p style="color: red;"> This data has been changed </p>`

// // console.log(`Here comes data from html ${paragraph1Value}`);

let div1Value = document.getElementsByClassName("div1");
div1Value[0].innerHTML = `<p>This is a div element</p>`;
let h3Value = document.getElementsByTagName("h3");

// console.log(h3Value[1]);

// let querySelector = document.querySelector("h3");
// console.log(querySelector);

let querySelectorAll = document.querySelectorAll("#paragraph1, h3");

console.log(querySelectorAll[0]);