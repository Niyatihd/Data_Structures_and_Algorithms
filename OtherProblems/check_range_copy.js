// for Example: arr = [[2,4], [7,8], [9,10]];
// function checkRange(arr, [5, 6]); => [[2,4], [5,6], [7,8], [9,10]]
// 1. range should not overlap and if doesn't add to list

// function checkRange(arr, range) {
//   // if not sorted, make deep copy and sort
//   const arrCopy = JSON.parse(JSON.stringify(arr));
//   let sortedArr = arrCopy.sort((a, b) => {
//     return a[0] - b[0];
//   });

//   // const result = [];
//   let currRange;
//   // BEFORE?
//   // AFTER?
//   // OVERLAPPING?

//   for (let i = 0; i < sortedArr.length; i++) {
//     currRange = sortedArr[i];

//     //BEFORE
//     if (range[1] < currRange[0]) {
//       // console.log(i + ":1");
//       // console.log(currRange);
//       // BEFORE
//       sortedArr = sortedArr
//         .slice(0, i)
//         .concat([range])
//         .concat(sortedArr.slice(i));
//       return sortedArr;
//     } else if (currRange[1] < range[0]) {
//       // console.log(i + ":2");
//       // console.log(currRange);

//       if (i !== sortedArr.length - 1) {
//         // AFTER === continue
//         continue;
//       } else {
//         // push into result
//         sortedArr.push(range);
//         return sortedArr;
//       }
//     } else {
//       // console.log(i + ":3");
//       // console.log(currRange);

//       return sortedArr;
//     }
//   }
// }

function checkRange2(arr, range) {
  // arr = [[2,4], [5,8], [10,11], [14,15]], range = [3,11] or [12,13]

  let currRange;
  // console.log(range);

  for (let i = 0; i < arr.length; i++) {
    currRange = arr[i]; //[2,4]
    // console.log(currRange);

    if (currRange[0] > range[1]) {
      //BEFORE
      arr.splice(i, 0, range);
      return arr;
    } else if (currRange[1] < range[0]) {
      //AFTER continue except last idx
      if (i === arr.length - 1) {
        arr.push(range);
        return arr;
      } else {
        continue;
      }
    } else {
      //MERGE
      // use bsearch
      // arr[i] = [
      //   Math.min(currRange[0], range[0]),
      //   Math.max(currRange[1], range[1])
      // ];
    }
  }

  // return arr;
}

console.log(checkRange2([[2, 4], [7, 8], [9, 10]], [5, 6]));
// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [0, 1]));
// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [8, 9]));
// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [11, 12]));
