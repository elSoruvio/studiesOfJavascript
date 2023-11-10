// type conversion = change the datatype of a value to another
//                  (strings, numbers, booleans)

let age = window.prompt("How old are you?");
age = Number(age);
if (age < 1) {
    let age = 1;
}

console.log(age, typeof age);

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(x, typeof y);
console.log(x, typeof z);