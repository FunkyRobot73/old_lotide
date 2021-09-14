const args = process.argv;

const reverse = function(word1, word2) {
  
  //console.log(args.slice(2));
  rev1 = word1.split("").reverse().join(""); 
  rev2 = word2.split("").reverse().join("");
  console.log(rev1 + " " + rev2);
}

reverse(args[2], args[3]);

