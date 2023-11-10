// How to accept user input

// 1. EASY WAY = window prompt
//2. PROFESSIONAL WAY = HTML textbox

//EASY WAY
let myUsername;

myUsername = window.prompt("what's your username?");

console.log(myUsername);

//PROFESSIONAL WAY
let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}