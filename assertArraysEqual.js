const eqArrays = function(eqArray1, eqArray2) {
  
  // found on w3docs.com 
  // One of the methods is converting both strings to JSON string and compare the strings to each other to determine equality. The JSON.stringify() method is used to convert the array to a string:
    
    let isEqual = JSON.stringify(eqArray1) === JSON.stringify(eqArray2);
      if(isEqual ? console.log(`\uD83D\uDE00 Holy Crap...  That's Equal!`) : console.log(`😈 Sorry... Not Equal`));
    
  };

  eqArrays([1, 2, 3], [1, 2, 3]);
  eqArrays(["batman", "superman", "wonder woman"], ["batman", "superman", "wonder woman"]);
  eqArrays(["188", "Carlos", 47], ["188", "Carlos", 47]);
  eqArrays(["cats", "MARVEL", 90210], ["dogs", "DC", 416]);
  