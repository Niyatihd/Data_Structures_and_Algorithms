// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
// For example, given: [1, 7, 3, 4] your function would return : [84, 12, 28, 21]
// by calculating:
// [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]
// Here 's the catch: You can't use division in your solution!

function getProductsOfAllIntsExceptAtIndex(arr) {
  let result = arr.slice(0);
  let prevProd = 1;

  for (let i = 0; i < result.length; i++) {
    let ele = arr[i];
    result[i] = prevProd;
    prevProd *= ele;
  }

  prevProd = 1;

  for (let i = result.length - 1; i >= 0; i--) {
    let ele = arr[i];
    result[i] *= prevProd;
    prevProd *= ele;
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
const test = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(test));
const test1 = [1, 0, 3, 4, 10];
console.log(getProductsOfAllIntsExceptAtIndex(test1));