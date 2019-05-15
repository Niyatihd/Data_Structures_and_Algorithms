// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//Slice still makes new array
function moveZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr = arr.slice(0, i).concat(arr.slice(i + 1).concat(0));
    }
  }

  return arr;
}
//In-place
function moveZeroes1(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[pos], arr[i]] = [arr[i], arr[pos]];
      pos++;
    }
  }

  return arr;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n^2)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes1([0, 1, 0, 3, 12]));
