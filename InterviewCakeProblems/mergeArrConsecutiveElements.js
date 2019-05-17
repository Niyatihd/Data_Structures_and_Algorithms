// Write a function to merge our arrays so that elements are added consecutively from each array.
// For example:
// const arr1 = [3, 4, 6, null, 11, 15];
// const arr2 = [1, 5, 8, 12, 14];
// console.log(mergeArr(arr1, arr2)); =>  [3, 1, 4, 5, 6, 8, null, 12, 11, 14, 15]
//Note: 1. arrays can be of diff lengths,
//      2. null or any other data structure should still be added

function mergeArr(arr1, arr2) {
  let result = [];
  const len1 = arr1.length;
  const len2 = arr2.length;

  while (arr1.length || arr2.length) {
    if (arr1.length > 0) {
      let ele1 = arr1.shift();
      result.push(ele1);
    }

    if (arr2.length > 0) {
      let ele2 = arr2.shift();
      result.push(ele2);
    }
  }

  return result;
}

// *-------------*
//   TEST CASES
// *-------------*
console.log(mergeArr([1, 2, null, 3, 4], [2, 3, 5, 1]));
const arr1 = [3, 4, 6, null, 11, 15];
const arr2 = [1, 5, 8, 12, 14];
console.log(mergeArr(arr1, arr2));
