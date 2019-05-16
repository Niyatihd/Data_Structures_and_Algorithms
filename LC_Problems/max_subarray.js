// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubArray(arr) {
  let sum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(sum + arr[i], arr[i]);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
