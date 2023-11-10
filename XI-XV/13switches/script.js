// SWITCH = can be an efficient replacement to many else if statements

// let day = Math.floor(Math.random(0) * 6);

/*
let day = true;

switch(day) {
    case 0:
        console.log("It is sunday")
        break;
    case 1:
        console.log("It is monday")
        break;
    case 2:
        console.log("It is tuesday")
        break;
    case 3:
        console.log("It is wednesday")
        break;
    case 4:
        console.log("It is thursday")
        break;
    case 5:
        console.log("It is friday")
        break;
    case 6:
        console.log("It is saturday")
        break;
    default:
        console.log(`"${day}" is not a day`)
    }
*/

let testScore = 90;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80 :
        letterGrade = "B";
        break;
    case testScore >=70 :
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default :
        letterGrade = "F";
}

console.log(`Your letter grade is ${letterGrade}.`)