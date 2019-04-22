// To prove this,let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

// *-------------*
// Recursive 
// *-------------*

function checkSingleRiffle(shuffledDeck, half1, half2) {
  //base case
  if (shuffledDeck.length === 0) {
    return true;
  }

  if (shuffledDeck[0] === half1[0]) {
    shuffledDeck.shift(); //Alternatively, take a slice of all three decks to preserve original arrays, but space complexity there would be O(n^2).
    half1.shift();
    return checkSingleRiffle(shuffledDeck, half1, half2);
  } else if (shuffledDeck[0] === half2[0]) {
    shuffledDeck.shift();
    half2.shift();
    return checkSingleRiffle(shuffledDeck, half1, half2);
  } else {
    return false;
  }
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n^2)
// Space complexity = O(1)

// *-------------*
// Iterative 
// *-------------*
function checkSingleRiffle2(shuffledDeck, half1, half2) {
  let half1Idx = 0;
  let half2Idx = 0;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (shuffledDeck[i] === half1[half1Idx]) {
      half1Idx++;
    } else if (shuffledDeck[i] === half2[half2Idx]) {
      half2Idx++;
    } else {
      return false;
    }
  }

  return true;
}
// *-------------*
//   TEST CASES
// *-------------*
// console.log(checkSingleRiffle([1, 2, 3, 4, 5], [1, 3], [2, 4, 5]));
// console.log(checkSingleRiffle([1, 2, 3, 4, 5], [1], [2, 4, 5]));
// console.log(checkSingleRiffle([1, 2, 3, 4, 5], [], [2, 4, 5]));
// console.log(checkSingleRiffle([1, 2, 3, 4, 5], [0, 1, 3], [2, 4, 5]));
console.log(checkSingleRiffle2([1, 2, 3, 4, 5], [1, 3], [2, 4, 5]));
console.log(checkSingleRiffle2([1, 2, 3, 4, 5], [1], [2, 4, 5]));
console.log(checkSingleRiffle2([1, 2, 3, 4, 5], [], [2, 4, 5]));
console.log(checkSingleRiffle2([1, 2, 3, 4, 5], [0, 1, 3], [2, 4, 5]));