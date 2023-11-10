// string slicing = creating a substring 
//                  from a portion of another string

//                  string.slice(start, end)

const fullName = "Soruvio Takahashandes";

let firstName = fullName.slice(0, 7);

let lastName = fullName.slice(8)
// without an ending value it selects all the string starting from the first value

console.log(firstName);
console.log(lastName);