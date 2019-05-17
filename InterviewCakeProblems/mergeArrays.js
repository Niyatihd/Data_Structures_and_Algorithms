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

function mergeArrays2(arr1, arr2) {
  // Create a deep copy of the meetings array
  let merged = [];

  while (arr1.length || arr2.length) {
    let firstEle1 = arr1[0];
    let firstEle2 = arr2[0];

    if (firstEle1 < firstEle2) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

function mergeThreeArrays(arr1, arr2, arr3) {
  // Create a deep copy of the meetings array
  let temp = mergeArrays2(arr1, arr2);
  // console.log("temp: ");
  // console.log(temp);
  let merged = mergeArrays2(temp, arr3);
  return merged;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
const myArray1 = [1, 2, 3, 4, 5];
const alicesArray1 = [6, 7, 8, 9];
const myArray2 = [1, 2, 3, 4, 5];
const alicesArray2 = [6, 7, 8, 9];
const mikesArray2 = [10, 11, 12];
console.log(mergeArrays(myArray, alicesArray));
console.log(mergeArrays2(myArray, alicesArray));
console.log(mergeArrays2(myArray1, alicesArray1));
console.log(mergeThreeArrays(myArray2, alicesArray2, mikesArray2));