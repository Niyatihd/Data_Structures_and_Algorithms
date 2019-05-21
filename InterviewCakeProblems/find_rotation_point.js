// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary.This array is huge(there are lots of words I don't know) so we want to be efficient here.
const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
];

// *-------------*
// Solution:
// *-------------*
function findRotationPoint(arr) {
  const first = arr[0];
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (end - start >= 0) {
    //tweaked binary search to search the rotation
    mid = Math.floor(start + (end - start + 1) / 2);
    // mid = Math.floor(start + (end - start) / 2); // both works

    if (arr[mid] >= first) {
      //move right
      start = mid;
    } else {
      //move left
      end = mid;
    }

    if (start + 1 === end && end === arr.length - 1) {
      return 0;
    } else if (start + 1 === end) {
      break;
    }
  }

  return end;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(log(n))
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(findRotationPoint(["k", "v", "a", "b", "c", "d", "e", "g", "i"])); // => 2
//////////////////////////////  0    1    2    3    4    5    6    7    8
console.log(findRotationPoint(words)); // => 5
console.log(findRotationPoint(["a", "b", "c", "d"])); // => 0
