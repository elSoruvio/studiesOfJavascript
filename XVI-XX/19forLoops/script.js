// for loops = repeat some code a limited amount time

// the first statement assigns a temporary counter
// let i is a common naming convention for counters in a loop
// i being index

// the second determines when the loop should stop

// the third sets how the counter increase/ decreases

/*
for(let i = 1; i <= 10; i-=3){
    console.log(i);
}

console.log("HAPPY NEW YEAR");
*/

// the CONTINUE skips that interation of the loop 
/*
for(let i = 1; i <=20; i++) {
    if(i ==13) {
        continue;
    } else {
        console.log(i);
    }
}
*/

// BREAK breaks out of the the loop entirely
for(let i = 1; i <=20; i++) {
    if(i ==13) {
        break;
    } else {
        console.log(i);
    }
}

