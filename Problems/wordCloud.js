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

// *-------------*
// Option#2
// *-------------*

function splitWords(str) {
  let start = 0;
  let wordLength = 0;
  const words = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isLetter(char)) {
      if (wordLength === 0) {
        start = i;
      }
      wordLength += 1;
    } else if (!isLetter(char)) {
      let tempWord = str.slice(start, start + wordLength);
      if (tempWord.length > 0) words.push(str.slice(start, start + wordLength));
      wordLength = 0;
    }
  }

  return words;
}

function wordCloud2(str) {
  const words = splitWords(str);

  let count = {};

  for (let i = 0; i < words.length; i++) {
    if (count[words[i]]) {
      count[words[i]] += 1;
    } else {
      count[words[i]] = 1;
    }
  }

  return count;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
// console.log(wordCloud("After beating the eggsd Dana read the next step: "));
// console.log(wordCloud("After beating the eggs, Dana read the next step: "));
// console.log(wordCloud("Add milk and eggs, then add flour and sugar."));
// console.log(splitWords("After beating the eggsd Dana read the next step: "));
// console.log(splitWords("Add milk and eggs, then add flour and sugar."));
// console.log(splitWords("I love Nishika. "));
console.log(wordCloud2("After beating the eggs Dana read the next step: egg "));
console.log(wordCloud2("Add milk and eggs, then add flour and sugar."));
console.log(wordCloud2("I love Nishika. "));