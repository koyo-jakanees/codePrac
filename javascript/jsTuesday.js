var saySomething = function(whatToSay) {
  alert(whatToSay);
};
  
var add = function(number1, number2) {
 return number1 + number2;
};
  
/*
 saySomething("hi"); 
 alert(add(3, 5));   
*/
var result = add(91, 78);
var outputText = "The sum is " + result + ".";
  
saySomething(outputText);

// Function literal and expression prac

//Take somebody's name and say a greeting to them.
var userName = prompt("what is your name?");
var greet = "How are you doing?";

alert( greet + " " + userName);

//OR using a function||

function Greet(user, greeting){
  user = prompt("What is your name");
  greeting = "hello";
  alert(greeting + " " +user +"!");
}

Greet(); //calling the function Greet

//Write a function to subtract two numbers.
function minus(param1, param2){
  return param1 - param2;
}

minus(56, 78);
var subtract = function(numOne, numTwo){
  return numOne - numTwo;
};

// Or as a function stetment

/*a function to multiply two numbers. 
  Then create a new function called threeTimes
  to multiply three numbers together. 
*/
var multiply = function(numOne, numTwo){
  return numOne * numTwo;
};

var threeTimes = function(numOne, numTwo, numThree){
  return numOne * numTwo * numThree;
};


/*Now write one to divide two numbers. 
  Then write a new function called remainder 
  to find the remainder of two numbers.
*/
var divide = function(numOne, numTwo){
  return numOne / numTwo;
};

var remainder = function(numOne, numTwo){
  return numOne%numTwo;
};

/*Prompt the user to enter their age, another prompt 
  to enter their name and another prompt to enter their 
  favorite food. Pass these as arguments to a function that 
  returns a sentence combining all of this information.
  Then display the returned string with an alert.
*/
function inquire(age, name, favFood){
  age = prompt("What is your age?");
  name = prompt("What is your name?");
  favFood = prompt("What is your favourite food?");
  return alert("Age: " +age +"\n"+ "Name: " + name + "\n"+"Favourite food: "+ favFood);
}

//Calculator Busines Logic
var subtract = function(number1, number2) {
  return number1 - number2;
};
alert(subtract(10,5));
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = prompt("Enter a number:");
var number2 = prompt("Enter another number:");
alert(add(number1, number2));