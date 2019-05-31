// for Example: arr = [[2,4], [7,8], [9,10]];
// function checkRange(arr, [5, 6]); => [[2,4], [5,6], [7,8], [9,10]]
// 1. range should not overlap and if doesn't add to list

function checkRange(arr, range) {
  // if not sorted, make deep copy and sort
  const arrCopy = JSON.parse(JSON.stringify(arr));
  let sortedArr = arrCopy.sort((a, b) => {
    return a[0] - b[0];
  });

  // const result = [];
  let currRange;
  // BEFORE?
  // AFTER?
  // OVERLAPPING?

  for (let i = 0; i < sortedArr.length; i++) {
    currRange = sortedArr[i];

    //BEFORE
    if (range[1] < currRange[0]) {
      // console.log(i + ":1");
      // console.log(currRange);
      // BEFORE
      sortedArr = sortedArr
        .slice(0, i)
        .concat([range])
        .concat(sortedArr.slice(i));
      return sortedArr;
    } else if (currRange[1] < range[0]) {
      // console.log(i + ":2");
      // console.log(currRange);

      if (i !== sortedArr.length - 1) {
        // AFTER === continue
        continue;
      } else {
        // push into result
        sortedArr.push(range);
        return sortedArr;
      }
    } else {
      // console.log(i + ":3");
      // console.log(currRange);

      return sortedArr;
    }
  }
}

function checkRange2(sortedArr, range) {
  // if not sorted, make deep copy and sort
  // const arrCopy = JSON.parse(JSON.stringify(arr));
  // let sortedArr = arrCopy.sort((a, b) => {
  //   return a[0] - b[0];
  // });

  // const result = [];
  let currRange;
  // BEFORE?
  // AFTER?
  // OVERLAPPING?

  for (let i = 0; i < sortedArr.length; i++) {
    currRange = sortedArr[i];

    //BEFORE
    if (range[1] < currRange[0]) {
      // console.log(i + ":1");
      // console.log(currRange);
      // BEFORE
      sortedArr.splice(i, 0, range);

      // sortedArr = sortedArr
      //   .slice(0, i)
      //   .concat([range])
      //   .concat(sortedArr.slice(i));
      return sortedArr;
    } else if (currRange[1] < range[0]) {
      // console.log(i + ":2");
      // console.log(currRange);

      if (i !== sortedArr.length - 1) {
        // AFTER === continue
        continue;
      } else {
        // push into result
        sortedArr.push(range);
        return sortedArr;
      }
    } else {
      // console.log(i + ":3");
      // console.log(currRange);
      // if (range[1] < sortedArr[i + 1][0]) {
      currRange[0] = Math.min(currRange[0], range[0]);
      currRange[1] = Math.max(currRange[1], range[1]);
      // range = currRange;
      // }
      return sortedArr;
    }
  }
}

function mergeRanges(input) {
  //[[1,3] => [2,4]
  const result = [input[0]];
  let mergedDateRange;
  let currDateRange;

  for (let i = 1; i < input.length; i++) {
    currDateRange = input[i];
    mergedDateRange = result[result.length - 1];

    if (mergedDateRange[1] >= currDateRange[0]) {
      //if input arr is sorted but not merged
      mergedDateRange[1] = Math.max(currDateRange[1], mergedDateRange[1]);
      //if input arr is sorted and merged
      // mergedDateRange[1] = currDateRange[1];
    } else {
      result.push(currDateRange);
    }
  }

  return result;
}

console.log(checkRange2([[2, 4], [7, 8], [9, 10]], [4, 9]));
console.log(checkRange2([[2, 4], [7, 8], [9, 10]], [5, 6]));
console.log(checkRange2([[2, 4], [7, 8], [9, 10]], [11, 12]));
console.log(checkRange2([[2, 4], [7, 8], [9, 10]], [0, 1]));
console.log(mergeRanges([[2, 9], [2, 9], [2, 10]]));
console.log(mergeRanges([[2, 9], [7, 8], [9, 10]]));
console.log(mergeRanges([[2, 9], [4, 9], [7, 8], [9, 10]]));

// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [0, 1]));
// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [8, 9]));
// console.log(checkRange([[2, 4], [7, 8], [9, 10]], [11, 12]));
