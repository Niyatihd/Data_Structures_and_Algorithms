//MergeSort
// *-------------*
//   Recursively
// *-------------*

function mergeSort(arr) {
  // console.log(arr);
  //basecase
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  let merged = [];

  while (leftArr.length && rightArr.length) {
    let leftShifted = leftArr[0];
    let rightShifted = rightArr[0];

    if (leftShifted > rightShifted) {
      merged.push(rightArr.shift());
    } else if (leftShifted < rightShifted) {
      merged.push(leftArr.shift());
    } else {
      merged.push(leftArr.shift());
    }
  }

  return merged.concat(leftArr).concat(rightArr);
}

// Analysis: 
// Time complexity = O(log(n))
// Space complexity = O(1)

// *-------------*
// TEST CASES
// *-------------*
console.log(mergeSort([])); // => []
console.log(mergeSort([1, 2, 3, 4, 5])); // => [1, 2, 3, 4, 5] 
console.log(mergeSort([9, 2, 3, 8, 5, 7, 5])); // => [2, 3, 5, 5, 7, 8, 9]
console.log(mergeSort([1, 1])); // => [1, 1]
console.log(mergeSort([10])); // => [10]
console.log(mergeSort([0, 1, 3, 5, 4, 8, 10, 12, 9, 10])); // => 