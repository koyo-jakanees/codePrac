/*functions to try out in-built method 
toExponential*/

var firstNumber = 9238.479;
console.log(firstNumber.toExponential());

var numTwo = 98370923874.32;
console.log(numTwo.toExponential());

/* round up to the nearest decimal or 
whole number */

var deciNum = 324.64322;
console.log(deciNum.toFixed(2));

//String Methods.
// to uppercase letters

console.log("I love Python,julia and Scala".toUpperCase());

//to lowercase

var statement = "LOREM IPSUM";
console.log(statement.toLowerCase());

//string concat

console.log("Pine".concat("Avocado"));

console.log("Example" + "Here");

//chaining string methods
console.log("I am ".concat("so excited").toUpperCase());


//String indexing. Zero based indices

console.log("Jakanees".charAt(3));
console.log("Jakanees".charAt(0));
console.log("Jakanees".charAt(8));

var stringSearch = "please show me where the 'show' is located";
console.log(stringSearch.search("show"));

//string slicing
var fruitList = "Papaya, Lemon, Avocado";
console.log(fruitList.slice(8, 13));

//practice string methods

var newString = "out of no where it just turned out"
console.log(newString.bold());

var randVar1 = "John Doe never died";
var randVar2 = "and so is Jane Doe still alive"

var fullSentence = randVar1.concat(randVar2).toUpperCase();
console.log(fullSentence);

console.log(randVar1.toLowerCase());
console.log(randVar2.toUpperCase());
console.log(randVar1.charAt(3));
console.log(randVar2.charAt(3));