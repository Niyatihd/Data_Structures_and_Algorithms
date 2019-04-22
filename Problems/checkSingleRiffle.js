// To prove this,let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

function checkSingleRiffle(shuffledDeck, half1, half2) {
  //base case
  if (shuffledDeck.length === 0) {
    return true;
  }

  if (shuffledDeck[0] === half1[0]) {
    shuffledDeck.shift();
    half1.shift();
    return checkSingleRiffle(shuffledDeck, half1, half2)
  } else if (shuffledDeck[0] === half2[0]) {
    shuffledDeck.shift();
    half2.shift();
    return checkSingleRiffle(shuffledDeck, half1, half2)
  } else {
    return false;
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
console.log(checkSingleRiffle([1, 2, 3, 4, 5], [1, 3], [2, 4, 5]));
console.log(checkSingleRiffle([1, 2, 3, 4, 5], [1], [2, 4, 5]));
console.log(checkSingleRiffle([1, 2, 3, 4, 5], [], [2, 4, 5]));
console.log(checkSingleRiffle([1, 2, 3, 4, 5], [0, 1, 3], [2, 4, 5]));