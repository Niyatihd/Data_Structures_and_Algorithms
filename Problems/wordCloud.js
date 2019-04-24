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
// Option#2 Class
// *-------------*

class WordCloudData {
  constructor(str) {
    this.addWordsToMap = new Map();
    this.populateMap(str);
  }

  splitWords(str) {
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

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  populateMap(str) {
    const words = this.splitWords(str);

    for (let i = 0; i < words.length; i++) {
      // console.log(this.addWordsToMap.has(words[i]));

      if (this.addWordsToMap.has(words[i])) {
        // console.log(1);
        this.addWordsToMap.set(words[i], this.addWordsToMap.get(words[i]) + 1);
      } else if (this.addWordsToMap.has(words[i].toLowerCase())) {
        // console.log(2);
        let newCount = this.addWordsToMap.get(words[i].toLowerCase()) + 1;
        this.addWordsToMap.set(words[i].toLowerCase(), newCount);
      } else if (this.addWordsToMap.has(this.capitalize(words[i]))) {
        // console.log(3);
        this.addWordsToMap.set(words[i], this.addWordsToMap.get(this.capitalize(words[i])) + 1);
        this.addWordsToMap.delete(this.capitalize(words[i]));
      } else {
        this.addWordsToMap.set(words[i], 1);
      }
    }

    return this.addWordsToMap;
  }
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
// console.log(wordCloud("After beating the eggsd Dana read the next step: "));
// console.log(wordCloud("After beating the eggs, Dana read the next step: "));
// console.log(wordCloud("Add milk and eggs, then add flour and sugar."));
// console.log(splitWords("After beating the eggsd Dana read the next step: "));
// console.log(splitWords("Add milk and eggs, then add flour and sugar."));
// console.log(splitWords("I love Nishika. "));
// console.log(wordCloud2("After After after beating the eggs Dana read the next step: egg "));
// console.log(wordCloud2("Add milk and eggs, then add flour and sugar."));
// console.log(wordCloud2("I i love Nishika. "));

const test = new WordCloudData("After After after beating the eggs Dana read the next step: egg ");
console.log(test);