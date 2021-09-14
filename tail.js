// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
 
//   if (actual === expected ? console.log(`\uD83D\uDE00Assertion Passed: [${actual}] === [${expected}]`) : console.log(`😈Assertion Failed: [${actual}] !== [${expected}]`));
  
// };

const tail = function(first) {

  let tailer = first.slice(1);
  console.log(`This is the Tail of the array: ${tailer}`);
  console.log(`This is the unmodified array: ${first}`);
};


// TEST CODE
// assertEqual(tail([5,6,7]), 5);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail(["Adele", "Tania", "Ellie"]), "Daisy");
tail([4,5,6,7]);
tail(["batman", "superman", "wonder woman", "flash"]);
tail(["Adele"]);
tail([]);