// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.
//Ex: arr1 = [1,2,3,5,6] => 90

//[3,5,8,5,3,2,5,67,8]

//Approach
//set = [3,5,8] => 120
// min(set) <= next ? 
// if yes,  delete min, add next => 

function highestProd(arr) {
  let highestNums = new Set([arr[0], arr[1], arr[2]]);
  return highestNums;
}

// *-------------*
//   TEST CASES
// *-------------*
const test = [1, 2, 3, 5, 6];
console.log(highestProd(test));