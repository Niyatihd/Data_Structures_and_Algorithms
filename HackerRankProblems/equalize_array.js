// Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.
// For example, if his array is arr=[1,2,2,3], we see that he can delete the 2 elements 1 and 3 leaving arr=[2,2] . He could also delete both twos and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.
// Function Description
// Complete the equalizeArray function in the editor below. It must return an integer that denotes the minimum number of deletions required.
// equalizeArray has the following parameter(s):
// arr: an array of integers
// Input Format
// The first line contains an integer n, the number of elements in arr.
// The next line contains n space-separated integers arr[i].
// Constraints
// 1 <= n <= 100
// 1 <= arr[i] <= 100

// *-------------*
//    Solution:
// *-------------*
function getMaxValue(obj) {
  let max = 0; //count is always going to be more than 0

  Object.values(obj).forEach(el => {
    max = Math.max(max, el); //Iterate through values and get max
  });

  return max;
}

function equalizeArray(arr) {
  let count = {}; //Initiate a hashmap to track count of elements

  arr.forEach(el => {
    if (count[el] === undefined) {
      count[el] = 1;
    } else {
      count[el]++;
    }
  });

  return arr.length - getMaxValue(count); //return total number of elements less maxCount
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(equalizeArray([1, 2, 2, 3])); // => 2
console.log(equalizeArray([3, 3, 2, 1, 3])); // => 2
