// constants are variables that can't change
// this example returns the value of the circumference by calculating previous inputs

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle`);

console.log(circumference);

document.getElementById("mySubmit").onclick = function() {
    document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}