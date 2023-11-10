// variable = container that stores a value
//            behaves as if it is the value it contains

//1. declaration    let x;
//2. assignment     x = 100;

let age = 25;
let price = 10.99;
let gpa = 2.1;

//typeof prints the value's data type
console.group(typeof age);

// Interpolated variable in a string
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your GPA is: $${gpa}`);

let firstName = "Soruvio";
let favouriteFood = "pizza";
let email = "Soruv10@gmil.com";

console.log(typeof firstName);
console.log(`Your nams is ${firstName}`);

console.log(`You like ${favouriteFood}`);

console.log(`Your email is: ${email}`);

//Booleans are either true or false
let online = false;
let forSale = true;
let isStudent = true;

console.log(`Bro is ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

//Changing HTML text
let fullName = "Soru Vioh";
let myAge = 17; 
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${myAge} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;