// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
// For example, given: [1, 7, 3, 4] your function would return : [84, 12, 28, 21]
// by calculating:
// [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]
// Here 's the catch: You can't use division in your solution!

function getProductsOfAllIntsExceptAtIndex(arr) {
  let result = arr;
  let prevProd = 1;

  for (let i = 0; i < result.length; i++) {
    let ele = arr[i];

    if (i === 0) {
      prevProd *= result[i];
      result[i] = 1;
    } else {
      let temp = result[i];
      result[i] = prevProd;
      prevProd *= temp;
    }
  }

  return result;
}