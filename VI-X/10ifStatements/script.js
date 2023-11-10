// random number generator

const min = 50;

const max = 100;
//let randomNum = Math.random();
//let randomNum = Math.floor(Math.random() * 6)+ 1;

//let randomNum = Math.floor(Math.random() * 100)+ 1;

let randomNum = Math.floor(Math.random() * max - min)+ min;

console.log(randomNum);