// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// Example 1:
// Input: [1,2,3,1]
// Output: true
// Example 2:
// Input: [1,2,3,4]
// Output: false
// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
  const countNums = {};

  for (let i = 0; i < nums.length; i++) {
    let currEle = countNums[nums[i]];

    if (currEle === undefined) {
      currEle = 1;
    } else {
      currEle++;

      if (currEle === 2) return true;
    }
  }

  return false;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(containsDuplicate([1, 2, 3, 1])); // => true
console.log(containsDuplicate([1, 2, 3, 4])); // => false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // => true
