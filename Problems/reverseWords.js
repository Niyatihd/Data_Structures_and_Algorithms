// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. String => immutable, Array => mutable
// ex: let stringToReverse = "cake pound Steal" 
// reverseWords(stringToReverse) => "Steal pound cake"

function (sentence) {
  let tempArr = str.split(" ");
  let lastIdx = tempArr.length - 1;

  for (let i = 0; i < tempArr; i++) {
    let temp = tempArr[i];
    tempArr[i] = tempArr[lastIdx]
  }
}