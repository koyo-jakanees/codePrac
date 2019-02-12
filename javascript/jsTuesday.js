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