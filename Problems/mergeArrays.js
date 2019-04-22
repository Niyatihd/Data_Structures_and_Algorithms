// We have our lists of orders sorted numerically already, in arrays.Write a function to merge our arrays of orders into one sorted array.
// For example:
// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];
// console.log(mergeArrays(myArray, alicesArray)); =>  [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeArrays(arr1, arr2) {
  // Create a deep copy of the meetings array
  const mergedArr = JSON.parse(JSON.stringify(arr1));

  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }

  mergedArr.sort((a, b) => {
    return a - b;
  });

  return mergedArr;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(x(line 9) + m(line11) + nlgn) = O(nlgn) = O(nlgn) // m is some number which can be considered constant
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(myArray, alicesArray));