// Arithmetic operators = operands (calues, variables, etc.)
//          operators (+ - * /)
//          ex. 11 = x + 5;

let students = 30;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
let extraStudents = students %= 3;

console.log(students);

//increment and decrement operator
students++;
students--;

/*
    precedence
    1. parenthesis ()
    2. exponents 
    3. multiplication & division & module
    4. addition and subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);