// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
// Example 1:
// Input: [3,0,1]
// Output: 2
// Example 2:
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

function missingNumber(arr) {
  let sum = (arr.length * (arr.length + 1)) / 2;

  // for (let i = 0; i <= arr.length; i++) {
  //   sum += i;
  // }
  //Instead of loop, to sum all elements upto a number use: num * ((num+1)/2)

  for (let j = 0; j < arr.length; j++) {
    sum -= arr[j];
  }

  return sum;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
