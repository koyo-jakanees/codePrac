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

var newString = "out of no where it just turned out";
console.log(newString.bold());

var randVar1 = "John Doe never died";
var randVar2 = "and so is Jane Doe still alive";

var fullSentence = randVar1.concat(randVar2).toUpperCase();
console.log(fullSentence);

console.log(randVar1.toLowerCase());
console.log(randVar2.toUpperCase());
console.log(randVar1.charAt(3));
console.log(randVar2.charAt(3));

//assignment operators
var favDrink = "green Tea" ;
console.log(favDrink);
var favNumber = 46;

console.log(favNumber += 1);
console.log(favNumber -= 9);
console.log(favNumber /= 78);

//comparison Operators
console.log(favNumber < 5);
console.log(favNumber === 68);
console.log(favNumber == "46");
console.log(10 >= 20);
console.log("solo" <= "Han");
console.log(475 != 475);

//Data types and conversion
//boolean string number undefined
var newNum = 5;
var numString = "5";

typeof newNum;
typeof numString;
newNum == numString;

var greeting = "hello people";
typeof greeting;

//type coaersion
// string to number
parseInt("85");

//returns NaN if the strign doesnt contain a number
var name = "thanos";

var bla = parseInt(name);

//to string
var numT = 458;
typeof numT;

var strNum = numT.toString();
typeof strNum;

var newNumT = parseInt(strNum);
typeof newNumT;

numT === newNumT;

numT !== strNum;

// Javascript Function
// diff from methods in that they are called by themselves and methods are called on something.
// functions that let us interact with the browser
alert("hey there . How are you?");

//prompting user input: opens a dialogue box for user input
prompt("What is your name?");
var  myLunch = prompt("where do you prefer to have your lunch?");

// can be chained with other data types' methods e.g
prompt("what is up?").toUpperCase();

// confirm function, takes a string arg too
confirm("Would you like to contiue?");
/*alert(): str arg: returns undefined
  prompt(): str arg: returns str 
  confirm(); str arg: returns bool */

