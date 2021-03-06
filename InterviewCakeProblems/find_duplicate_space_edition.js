// Find a duplicate, Space Edition™.
// We have an array of integers, where:
// 1. The integers are in the range 1..n1..n
// 2. The array has a length of n + 1n + 1
// It follows that our array has at least one integer which appears at least twice.But it may have several duplicates, and each duplicate may appear more than twice.
// Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)
// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM.So we need to optimize for space!

// *-------------*
// Option#1:
// *-------------*
function findDuplicate(arr) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) return arr[i];

    seen.add(arr[i]);
  }

  return "Error: No duplicates!!";
  // throw new Error("No duplicates!");
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(findDuplicate([1, 4, 7, 9, 5, 4, 1, 6])); //=> 4
console.log(findDuplicate([1, 4, 7, 9, 5, 6])); //=> error
