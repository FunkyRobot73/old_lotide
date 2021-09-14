// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if (actual === expected ? console.log(`\uD83D\uDE00Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈Assertion Failed: [${actual}] !== [${expected}]`));
  
};

const head = function(first, second) {

  let header = first[0]; let jimmy = second;
  return header;

}


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Adele", "Tania", "Ellie"]), "Daisy");
