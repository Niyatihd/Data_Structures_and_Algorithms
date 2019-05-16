// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor) + floor);
}

// console.log(getRandom(2, 8));

function inPlaceShuffle(arr) {
  //arr = [2,7,4,2,5,6,3]
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    let randomIdx = getRandom(pos, arr.length);

    if (randomIdx !== pos) {
      let temp = arr[pos];
      arr[pos] = arr[randomIdx];
      arr[randomIdx] = temp;
    }

    pos++;
  }

  return arr;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(inPlaceShuffle([1, 2, 3, 4, 5, 6]));
