// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. String => immutable, Array => mutable
// ex: let stringToReverse = "cake pound Steal" 
// reverseWords(stringToReverse) => "Steal pound cake"

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
// Time complexity = O(log(n))
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
let stringToReverse = "cake pound Steal";
console.log(reverseWords(stringToReverse));