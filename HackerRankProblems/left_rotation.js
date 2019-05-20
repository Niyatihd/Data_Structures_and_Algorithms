// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
// Given an array a of n integers and a number, d, perform d left rotations on the array.Return the updated array to be printed as a single line of space - separated integers.
// Function Description
// Complete the function rotLeft in the editor below.It should return the resulting array of integers.
// rotLeft has the following parameter(s):
// An array of a integers.
// An integer d, the number of rotations.
// Input Format
// The first line contains two space - separated integers n and d, the size of a and the number of left rotations you must perform.
// The second line contains n space - separated integers a[i].
// Constraints
// 1 <= n <= 10^5
// 1 <= d <= n
// 1 <= a[i] <= 10^6

// *-------------*
//    Option#1
// *-------------*
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }

  return a;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n) // worst case if d = length of array
// Space complexity = O(1)

// *-------------*
//    Option#2
// *-------------*
function rotLeft2(a, d) {
  const aLen = a.length;
  const aCopy = a.slice(0);
  let shiftIdx;

  for (let i = 0; i < a.length; i++) {
    shiftIdx = (i + aLen - d) % aLen;
    a[shiftIdx] = aCopy[i];
  }

  return a;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//    Option#3
// *-------------*
function rotLeft3(a, d) {
  return a.slice(d).concat(a.slice(0, d));
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(rotLeft([1, 2, 3, 4, 5], 2)); // => [3, 4, 5, 1, 2]
console.log(rotLeft2([1, 2, 3, 4, 5], 2)); // => [3, 4, 5, 1, 2]
console.log(rotLeft3([1, 2, 3, 4, 5], 2)); // => [3, 4, 5, 1, 2]
