// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

// *-------------*
// Option#1
// *-------------*
function checkMagazine(magazine, note) {
  const wordsCount = {};
  let word;

  note.forEach(word => {
    if (wordsCount[word] === undefined) {
      wordsCount[word] = 1;
    } else {
      wordsCount[word]++;
    }
  });

  let found = Object.values(wordsCount).length;

  for (let i = 0; i < magazine.length; i++) {
    word = magazine[i];
    console.log("found: " + found);
    if (wordsCount[word] !== undefined) {
      wordsCount[word]--;
    }

    if (wordsCount[word] === 0) found--;
    if (found === 0) break;
  }

  return found === 0 ? "Yes" : "No";
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
// Option#2 - DOES NOT WORK: BECAUSE SET CAN ONLY STORE UNIQUE VALUES
// *-------------*
function checkMagazine2(magazine, note) {
  const arrSet = new Set(note); //WEAKNESS
  let word;

  for (let i = 0; i < magazine.length; i++) {
    word = magazine[i];
    if (arrSet.has(word)) {
      arrSet.delete(word);
    }
    if (arrSet.size === 0) break;
  }

  return arrSet.size === 0 ? "Yes" : "No";
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(
  checkMagazine2(
    ["give", "me", "one", "grand", "today", "night"],
    ["give", "one", "grand", "today"]
  )
); // => Yes
console.log(
  checkMagazine2(
    "two times three is not four".split(" "),
    "two times two is four".split(" ")
  )
); // => No
console.log(
  checkMagazine2(
    "ive got a lovely bunch of coconuts".split(" "),
    "ive got some coconuts".split(" ")
  )
); // => No
