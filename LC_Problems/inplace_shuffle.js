// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function getRandom(floor, ceiling) {
  return Math.random(floor, ceiling);
}

console.log(getRandom(2, 8));

function inPlaceShuffle(arr) {
  //arr = [2,7,4,2,5,6,3]
  let pos = 0;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
