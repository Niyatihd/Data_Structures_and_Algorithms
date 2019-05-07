// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    let ele1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let ele2 = arr[j];

      if (ele1 + ele2 === target) {
        return [i, j];
      }
    }
  }
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n^2)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
