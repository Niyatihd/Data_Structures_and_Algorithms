const reverseStr2 = require('../CTCI/Chap1_arrays_and_strings/12_reverseString');

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. String => immutable, Array => mutable
// ex: let stringToReverse = "cake pound Steal" 
// reverseWords(stringToReverse) => "Steal pound cake"

// *-------------*
// Option#1
// *-------------*

function reverseWords(sentence) {
  let tempArr = sentence.split(" ");
  let lastIdx = tempArr.length - 1;

  for (let i = 0; i < tempArr.length / 2; i++) {
    let temp = tempArr[i];
    tempArr[i] = tempArr[lastIdx - i];
    tempArr[lastIdx - i] = temp;
  }

  return tempArr.join(" ");
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(log(n^2)) //as each time words of different lenths get swapped, it has to make space for longer words replacing shorter ones.
// Space complexity = O(n)



// *-------------*
// Option#2
// *-------------*

function reverseWords2(sentence) {
  reverseStr2(sentence, 0, sentence.length - 1);
  let start = 0;
  // console.log("reversedchars: " + sentence);

  for (let i = 0; i <= sentence.length; i++) {

    if (i === sentence.length || sentence[i] === " ") {
      reverseStr2(sentence, start, i - 1);
      start = i + 1;
      // console.log("i: " + i);
      // console.log("start: " + start);
      // console.log(sentence);
    }

  }

  return sentence.join("");
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(log(n^2)) //as each time words of different lenths get swapped, it has to make space for longer words replacing shorter ones.
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
let stringToReverse = "cake pound Steal";
// console.log(reverseWords(stringToReverse));
console.log(reverseWords2(["c", "a", "k", "e", " ", "p", "o", "u", "n", "d", " ", "S", "t", "e", "a", "l"]));
// console.log(reverseWords2(["r", "o", "m", "e", "s", " "]));
// console.log(reverseStr2("string To Reverse", 0, 16));