// Visa
/*
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
[2,2,1,5] target = 3
return [0,2] and [1,2]
[1] = return false
*/ //BAD SOLUTION O(n^2)
function sumElements(arr, target) {
  let count = {}; // {2: [0,1], }
  let result = []; //
  let curr;
  let diff;

  arr.forEach((ele1, i) => {
    curr = ele1; //1
    diff = target - curr; // 2

    if (count[diff]) {
      count[diff].forEach(ele2 => {
        result.push([ele2, i]);
      });
    } else {
      if (count[curr]) {
        count[curr].push(i);
      } else {
        count[curr] = [i];
      }
    }
  });

  return result;
}

// *------------------*
//  BSearch Iteratively
// *------------------*

// function bSearch(arr, target) {
//   let result = [];
//   let firstIdx = 0;
//   let lastIdx = arr.length - 1;

//   while (lastIdx - firstIdx > 0) {
//     let mid = firstIdx + Math.floor((lastIdx - firstIdx + 1) / 2);

//     if (arr[mid] === target) {
//       // console.log("in");
//       result.push(mid);
//       // return mid;
//     } else if (target < arr[mid]) {
//       lastIdx = mid - 1;
//     } else {
//       firstIdx = mid + 1;
//     }
//   }

//   return result;
// }

// function twoSumWithTwist(arr, target) {
//   let result = [];
//   let sorted = arr.sort();

//   for (let i = 0; i < sorted.length; i++) {
//     let curr = sorted[i];
//     let diff = target - curr;
//     let searchResult = bSearch(sorted, diff);

//     if (searchResult.length > 0) {
//       for (let j = 0; j < searchResult.length; j++) {
//         result.push([i, searchResult[j]]);
//       }
//     }
//   }

//   return result;
// }

console.log(sumElements([2, 2, 1, 5], 3));
// console.log(twoSumWithTwist([2, 2, 1, 5], 3));
// console.log(bSearch([1, 2, 2, 5], 5));
