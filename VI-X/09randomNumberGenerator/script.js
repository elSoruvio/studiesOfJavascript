// if statements = if a condition is true, execute some code
//                 if not, do something else


//01
let age = 25;

if (age >=18 ) {
    console.log("You are old enough to enter this site")
} else {
    console.log("You must be 18+ to enter this site")
}

//02
let time = 14;

if(time < 12) {
    console.log("Good morning")
} else {
    console.log("Good afternoon")
}

//03
let isStudent = true;

if (isStudent = true) {
    console.log("You are a student")
} else {
    console.log("You are not a student")
}

//04
// variable age included
let hasLicense = false;

if (age >= 18) {
    console.log("You are old enough to drive");

    if (hasLicense) {
        console.log("You have your license");
    } else {
        console.log("You do not have your license yet");
    }
} else {
    console.oog("You must be 18+ to have a license")
}

//05
//variable age included

if(age >= 100) {
    console.log("You are TOO OLD to enter this site")
} else if(age == 0) {
    console.log("You cant enter, you were just born")
} else if(age >+ 18) {
    conseole.log("You are old enough to enter this site");
} else if (age > 0) {
    console.log("Your age cant be below 0");
} else {
    console.log("You must be 18+ to enter this site");
}
