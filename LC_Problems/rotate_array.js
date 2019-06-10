// Given an array, rotate the array to the right by k steps, where k is non - negative.
// Example 1:
// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Explanation:
// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:
// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]
// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in -place with O(1) extra space ?

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(k)
// Space complexity = O(n*k)

function rotateArray2(nums, k) {
  const result = nums.slice(0);
  let shift;

  for (let i = 0; i < nums.length; i++) {
    shift = (i + k) % nums.length;
    result[shift] = nums[i];
  }

  return result;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // => [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // => [3, 99, -1, -100]
console.log("---------------------");
console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)); // => [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray2([-1, -100, 3, 99], 2)); // => [3, 99, -1, -100]
