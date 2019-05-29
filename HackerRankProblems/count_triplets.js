// You are given an array and you need to find number of tripets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i<j<k.
// For example, arr[1,4,16,64]. If r = 4, we have  [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3).
// Function Description
// Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given r as an integer.
// countTriplets has the following parameter(s):
// arr: an array of integers
// r: an integer, the common ratio
// Input Format
// The first line contains two space-separated integers n and r, the size of arr and the common ratio.
// The next line contains n space-seperated integers arr[i].

//Steps
// 1. make count obj for each num in arr
// 2. figure out # of cases based on count

// function getNumCountObj(arr) {
//   const numCount = {};

//   arr.forEach(n => {
//     if (numCount[n] === undefined) {
//       numCount[n] = 1;
//     } else {
//       numCount[n] += 1;
//     }
//   });

//   return numCount;
// }

// function countTriplets(arr, r) {
//   // console.log(arr);
//   let numCount;
//   let first, mid, last, num;
//   let firstCount,
//     midCount,
//     lastCount = 0;
//   let triplets = 0;
//   const seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     numCount = getNumCountObj(arr.slice(i));
//     console.log(numCount);

//     if (seen.has(num)) {
//       continue;
//     } else {
//       first = num;
//       seen.add(num);
//     }
//     mid = num * r;
//     last = mid * r;

//     firstCount = numCount[first];
//     midCount = numCount[mid];
//     lastCount = numCount[last];
//     console.log("first: " + first);
//     console.log("mid: " + mid);
//     console.log("last: " + last);
//     console.log("firstCount: " + firstCount);
//     console.log("midCount: " + midCount);
//     console.log("lastCount: " + lastCount);
//     console.log("--------------------------");

//     if (lastCount === undefined) {
//       break;
//     } else {
//       console.log(
//         "firstCount * midCount * lastCount: " +
//           firstCount * midCount * lastCount
//       );

//       triplets += firstCount * midCount * lastCount;
//       console.log("triplets: " + triplets);
//       console.log("--------------------------");
//     }
//   }

//   return triplets;
// }

const defaultDictFactory = () =>
  new Proxy(
    {},
    {
      get: (target, name) => (name in target ? target[name] : 0)
    }
  );

function countTriplets(arr, r) {
  let v2 = defaultDictFactory();
  let v3 = defaultDictFactory();
  // console.log("v2: ");
  // console.log(v2);
  // console.log("v3: ");
  // console.log(v3);

  let count = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    const el = arr[i];
    count += v3[el];
    v3[el * r] += v2[el];
    v2[el * r] += 1;
    // console.log("--------------------");
    // console.log("el: " + el);
    // console.log("count += v3[el]: " + count);
    // console.log("v3: ");
    // console.log(v3);
    // console.log("v2: ");
    // console.log(v2);
  }

  return count;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n^2) //1 3 3 9 27  [[3,9,27], [3,9,27], [3,9,27], [3,9,27], ]
// Space complexity = O(n)    2 * 1 * 1 = 2

// *-------------*
//   TEST CASES
// *-------------*
// console.log(getNumCountObj("1 3 3 9 27".split(" ")));
console.log(countTriplets("1 2 2 4".split(" "), 2)); // => 2
// console.log(countTriplets("1 3 9 9 27 81".split(" "), 3)); // => 6
// console.log(countTriplets("1 5 5 25 125".split(" "), 5)); // => 4
//1 1 1 1 1 1
