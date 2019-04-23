// Write code that takes a long string and builds its word cloud data in a map↴, where the keys are words and the values are the number of times the words occurred.

function isLetter(char) {
  const lowercased = char.toLowerCase();
  if ('abcdefghijklmnopqrstuvwxyz'.includes(lowercased)) {
    return true;
  } else {
    return false;
  }
}

function wordCloud(str) {
  let count = {};
  let tempWord = '';

  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      tempWord += str[i];
    } else if (count[tempWord]) {
      count[tempWord] += 1;
      tempWord = '';
    } else {
      count[tempWord] = 1;
      tempWord = '';
    }
  }

  return count;
}

function wordCloud2(str) {
  // let count = {};
  let start = 0;
  let wordLength = 0;
  const words = [];

  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      if (wordLength === 0) {
        start = i;
      }
      wordLength += 1;
    } else if (!isLetter(str[i])) {
      words.push(str.slice(start, start + wordLength));
      wordLength = 0;
    }
  }

  return words;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(wordCloud("After beating the eggsd Dana read the next step: "));
console.log(wordCloud("Add milk and eggs, then add flour and sugar."));
console.log(wordCloud2("After beating the eggsd Dana read the next step: "));
console.log(wordCloud2("Add milk and eggs, then add flour and sugar."));