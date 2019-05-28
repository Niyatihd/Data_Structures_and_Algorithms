// You are given an unordered array consisting of consecutive integers belongs to [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
// For example, given the array arr = [7,1,3,2,4,5,6]  we perform the following steps:
// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took 5 swaps to sort the array.
// Function Description
// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.
// minimumSwaps has the following parameter(s):
// arr: an unordered array of integers
// Input Format
// The first line contains an integer, n, the size of arr.
// The second line contains n space-separated integers arr[i].
// Constraints
// 1 <= n <= 10^5
// 1 <= arr[i] <= n
// Output Format
// Return the minimum number of swaps to sort the given array.

function minimumSwaps(arr) {
  //given that array will have consecutive numbers that does not repeat
  //We can take advantage of indices to calculate swaps

  const minVal = Math.min(...arr);
  let sortedIdx;
  let swaps = 0;
  let temp;
  let i = 0;
  let el;

  while (i < arr.length) {
    el = arr[i];
    //each element should be at `el - minVal` position in sorted array
    sortedIdx = el - minVal;
    // console.log(arr);
    if (i !== sortedIdx) {
      temp = arr[i];
      arr[i] = arr[sortedIdx];
      arr[sortedIdx] = temp;
      swaps++;
    } else {
      i++;
    }
  }

  return swaps;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(1)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
const array1 = [7, 1, 3, 2, 4, 5, 6]; // => 5
const array2 = [4, 3, 1, 2]; // => 3
console.log(minimumSwaps(array1));
console.log(minimumSwaps(array2));
