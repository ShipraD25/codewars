// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, 
// and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 
// Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    //TODO 
    var paranthesis = 0;
    var curly =0;
    var bracket =0;
    for (let i = 0; i < braces.length; i++) {
      
      if (braces[i] === '(') {
        paranthesis++;
      } 
      if (braces[i] === ')') {
        paranthesis--;
      } 
      if (braces[i] === '{') {
         curly++;
    } if (braces[i] === '}') {
          curly--;
    } 
    if (braces[i] === '[') {
       bracket++;
    }
    if (braces[i] === ']') {
      bracket--;
    } 
    if (paranthesis <0 || curly <0 || bracket< 0) {
      return false;
    } else {
      return true;
    }
    }
  }

console.log(validBraces("(){}[]"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));

  