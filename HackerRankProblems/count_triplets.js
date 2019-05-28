// You are given an array and you need to find number of tripets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i<j<k.
// For example, arr[1,4,16,64]. If r = 4, we have  [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3).
// Function Description
// Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given r as an integer.
// countTriplets has the following parameter(s):
// arr: an array of integers
// r: an integer, the common ratio
// Input Format
// The first line contains two space-separated integers n and r, the size of arr and the common ratio.
// The next line contains n space-seperated integers arr[i].

//Steps
// 1. make count obj for each num in arr
// 2. figure out # of cases based on count

function numCountObj(arr) {
  const numCount = {};

  arr.forEach(n => {
    if (numCount[n] === undefined) {
      numCount[n] = 1;
    } else {
      numCount[n] += 1;
    }
  });

  return numCount;
}

function countTriplets(arr, r) {}

console.log(numCountObj("1 3 3 9 27".split(" ")));
// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n^2) //1 3 3 9 27  [[3,9,27], [3,9,27], [3,9,27], [3,9,27], ]
// Space complexity = O(n)    2 * 1 * 1 = 2

// *-------------*
//   TEST CASES
// *-------------*
