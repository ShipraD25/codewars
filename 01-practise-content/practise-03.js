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

function copyExcecpt(brace, idx) {
  let out = ""
  for (let i = 0; i < brace.length; i++) {
    if (i != idx && i != idx + 1) {
      out = out + brace[i]
    }
  }
  return out
}

function isMatching(braces, i) {
  if (braces[i] == '(' && braces[i+1] == ')') return true;
  if (braces[i] == '[' && braces[i+1] == ']') return true;
  if (braces[i] == '{' && braces[i+1] == '}') return true;
  return false; 
}

function validBraces(braces){
  let lengthBeforeStart  = 0
  do {
    lengthBeforeStart = braces.length
    for (let i = 0; i < braces.length - 1; i++) {
      let next = i + 1
      if (isMatching(braces, i)) {
        //console.log("Found match at  index=%d, before match = %s", i, braces)
        braces = copyExcecpt(braces, i)
        // console.log("After=%s", braces)
      }
    }
  } while (braces.length != 0 && lengthBeforeStart != braces.length)  
  return braces.length == 0

    //TODO 
  //   var paranthesis = 0;
  //   var curly =0;
  //   var bracket =0;
  //   for (let i = 0; i < braces.length; i++) {
      
  //     if (braces[i] === '(') {
  //       paranthesis++;
  //     } 
  //     if (braces[i] === ')') {
  //       paranthesis--;
  //     } 
  //     if (braces[i] === '{') {
  //        curly++;
  //   } if (braces[i] === '}') {
  //         curly--;
  //   } 
  //   if (braces[i] === '[') {
  //      bracket++;
  //   }
  //   if (braces[i] === ']') {
  //     bracket--;
  //   } 
  // } 
  //  if (paranthesis <0 || curly <0 || bracket <0) {
  //     return false;
  //  }
  //   if (paranthesis ===0 || curly ===0 || bracket === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
    
  }

console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));


// console.log(validBraces("(){}[]"));
// console.log(validBraces("(}"));
// // failing this test
// console.log(validBraces("[(])"));

// console.log(validBraces("[({})](]"));
//console.log("Copy except=%s", copyExcecpt("rahulDimri", 9))
  