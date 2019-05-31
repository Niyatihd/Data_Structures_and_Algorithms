//MERGE RANGES
function mergeRanges(arr) {
  //[[2, 4], [7, 8], [9, 10]]
  const result = [arr[0]];
  let curr, prev;

  for (let i = 1; i < arr.length; i++) {
    curr = arr[i]; //[7,8]
    prev = result[result.length - 1]; //[2,4]

    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      result.push(curr);
    }
  }

  return result;
}

// console.log(mergeRanges([[2, 9], [2, 9], [2, 10]]));
// console.log(mergeRanges([[2, 9], [7, 8], [9, 10]]));
// console.log(mergeRanges([[2, 9], [4, 9], [7, 8], [9, 10]]));

//MERGE NEW RANGE `INPLACE`
function mergeNewRange(arr, newR) {
  //[2, 4], [7, 8], [9, 10]], [4, 9]
  // checks
  // 1. BEFORE [0,1] if (curr[0] > new[1]) => use splice() O(n)
  // 2. AFTER  [11,12] if (curr[1] < new[0])
  // 3. MERGES [4,9] else merge
  // 4. mergeRanges(arr)
  // Complexity: O(n)
}

//Given that arr is sorted, we can use Binary Search
//1. newR merges all other ranges => if (newR[0] < arr[0][0] && newR[1] >        arr[arr.length - 1][1]) )
//2. Binary Search
//   - minBsrch
//   - maxBsrch
//     - within ranges
//     - between ranges
