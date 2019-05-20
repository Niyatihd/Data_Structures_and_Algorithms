// Given a 6x6 2D Array, arr:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g
// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.
// For example, given the 2D array:
//  0  1  2  3 4 5
// -9 -9 -9  1 1 1   0
//  0 -9  0  4 3 2   1
// -9 -9 -9  1 2 3   2
//  0  0  8  6 6 0   3
//  0  0  0 -2 0 0   4
//  0  0  1  2 4 0   5
// We calculate the following  16 hourglass values:
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18
// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.
// Function Description
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
// hourglassSum has the following parameter(s):
// arr: an array of integers
// Input Format
// Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

//pos=[x,y] => [[x,y], [x, y+1], [x, y+2], [x+1, y+1], [x+2, y], [x+2, y+1], [x+2, y+2]]

// *-------------*
//    Solution:
// *-------------*
//Helper function to sum at each index of arr
function calculateSum(arr, [x, y]) {
  let sum;
  const hourglassPos = [
    //arr containing all position of hourglass wrt position [x,y]
    [x, y],
    [x, y + 1],
    [x, y + 2],
    [x + 1, y + 1],
    [x + 2, y],
    [x + 2, y + 1],
    [x + 2, y + 2]
  ];
  let elVal;

  hourglassPos.forEach(el => {
    //iteration that sums value at each index of hourglass wrt position [x,y]
    elVal = arr[el[0]][el[1]];
    sum = sum !== undefined ? sum + elVal : elVal; //if sum is undefined, sets sum to elVal, else sets sum to sumTotal of sum and elVal
  });

  return sum;
}

function hourglassSum(arr) {
  let maxSum; //tracks maximum sum
  let currSum;

  for (let i = 0; i < arr.length - 2; i++) {
    //Only Iterate till the index at which hourglass has possible indices around, therefore, arr.length - 2
    for (let j = 0; j < arr[0].length - 2; j++) {
      currSum = calculateSum(arr, [i, j]);
      maxSum = maxSum === undefined ? currSum : Math.max(maxSum, currSum); //if maxSum is undefined, sets maxSum to currSum, else compares maxSum to currSum and sets maxvalue to MaxSum
    }
  }

  return maxSum;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n^2)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
// console.log(calculateSum(arr, [0, 0]));
// console.log(calculateSum(arr, [0, 1]));
console.log(hourglassSum(arr)); // => 28
