// while loop = repeat some code WHILE some condition is true

// let username = "";

// a bad loop might run the function forever until your PC crashes
/*
while(username === "" || username === null) {
    console.log("You didn't enter your name");
}
*/

// an actually fine example of a while loop:
/*
while(username === "" || username === null) {
    username = window.prompt("Enter your name");
}

console.log(`Hello ${username}`);
*/

// Do While loop variation:
// the Do function executes the program at least once
// then the While verifies if the condition is met for it to be executed again

/*
do {
    username = window.prompt("Enter your name");
}
while(username === "" || username === null);
    

console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");


    if (username === "myUserName" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in")
    } else {
        console.log("Invalid credentials! PLease try again")
    }
}