// FUNCTION IMPLEMENTATION
const assertEqual = function(equal1, equal2) {
  
  if (equal1 === equal2 ? console.log(`\uD83D\uDE00Assertion Passed: [${equal1}] === [${equal2}]`) : console.log(`😈Assertion Failed: [${equal1}] !== [${equal2}]`));
  
};

const eqArrays = function(eqArray1, eqArray2) {
  
// found on w3docs.com 
// One of the methods is converting both strings to JSON string and compare the strings to each other to determine equality. The JSON.stringify() method is used to convert the array to a string:

  let isEqual = JSON.stringify(eqArray1) === JSON.stringify(eqArray2);
  return(isEqual);
  
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

