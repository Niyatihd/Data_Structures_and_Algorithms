// See if target appears in SORTED arr
// ex: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; target = 3; => returns 2

// *-------------*
//   Iteratively
// *-------------*
function binarySearch(arr, target) {
  // set 2 pointers for start and end index
  let startIdx = 0;
  let endIdx = arr.length - 1;


  while (endIdx - startIdx >= 0) {
    let mid = startIdx + Math.floor((endIdx - startIdx + 1) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      startIdx = mid + 1;
    } else if (target < arr[mid]) {
      endIdx = mid - 1;
    }
  }

  return null;
}

// Analysis: 
// Time complexity = O(log(n))
// Space complexity = O(1)



// *-------------*
//   Recursively
// *-------------*
function binarySearchRec(arr, target) {
  //basecase
  if (arr.length === 0) return null;

  let mid = Math.floor(arr.length / 2);

  //inductive step
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    arr = arr.slice(0, mid);
    return binarySearchRec(arr, target);
  } else {
    arr = arr.slice(mid + 1, arr.length);
    let result = binarySearchRec(arr, target);
    return result === null ? null : result + mid + 1;
  }
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(log(n))
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // => 4 
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // => 1 
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // => 0
console.log(binarySearch([1, 2, 3, 4, 5], 9)); // => null

console.log(binarySearchRec([1, 2, 3, 4, 5], 5)); // => 4 
console.log(binarySearchRec([1, 2, 3, 4, 5], 2)); // => 1 
console.log(binarySearchRec([1, 2, 3, 4, 5], 1)); // => 0
console.log(binarySearchRec([1, 2, 3, 4, 5], 9)); // => null