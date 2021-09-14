// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.log(`Does ${actual} = ${expected} ??`)
  //console.log((console.assert(actual === expected)));
  if (actual === expected ? console.log(`\uD83D\uDE00Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈Assertion Failed: [${actual}] !== [${expected}]`));
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("jimmy", "jimmy");
assertEqual("77", "77");
