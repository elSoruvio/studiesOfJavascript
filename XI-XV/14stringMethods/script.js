// string methods = allow you to manipulate and work wuth text (strings)

let userName = "Soruvio";

let phoneNumber = "123-456-7890"

userName.charAt();
// it returns a single character from a string based of its index
// First character == 0 aways, the others go from there

userName.indexOf();
// it returns the index of the first ocurrence of a character

userName.lastIndexOf();
// it returns the index of the last ocurrence of a character

userName.length();
// it returns the value of the length of a string

userName.trim();
// it removes any white space of the string

userName.toUpperCase();
// turns all the letters of a string to upper case

userName.toLowerCase();
// turns all the letters of a string to lower case

userName.repeat();
// it repeats the string as much times as the value on the parenthesis dictates

userName.startsWith();
// it determines wether or not a string starts with a given character
// returns a boolean

userName.endsWith();
// it determines wether or not a string ends with a given character
// returns a boolean
 
userName.includes();
// it determines wether or not a string includes a given character
// it returns a boolean

phoneNumber.replaceAll();
// it replaces a specific character of a string by another
// Whatever you place first on the parenthesis gets changed by what comes next after the comma

phoneNumber.padStart();
// the first value on a .padStart() determines what the length of the text should be
// the second value repeats itslef and fills the start of the string up until the whole length gets used

phoneNumber.padEnd()
// the first value on a .padStart() determines what the length of the text should be
// the second value repeats itslef and fills the end of the string up until the whole length gets used

console.log(userName);