// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
// For example:
// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

const testArr = [{
    startTime: 0,
    endTime: 1
  },
  {
    startTime: 3,
    endTime: 5
  },
  {
    startTime: 4,
    endTime: 8
  },
  {
    startTime: 10,
    endTime: 12
  },
  {
    startTime: 9,
    endTime: 10
  },
];

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
    let leftShifted = leftArr[0]["startTime"];
    let rightShifted = rightArr[0]["startTime"];

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


function mergeRanges(arr) {
  const sortedRanges = mergeSort(arr);
  let result = [];

  let start = arr[0]["startTime"];
  let end = arr[0]["endTime"];

  for (let i = 1; i < sortedRanges.length; i++) {
    let nextStart = sortedRanges[i]["startTime"];
    let nextEnd = sortedRanges[i]["endTime"];

    if (start < nextStart && end < nextStart && end < nextEnd) {
      result.push({
        "startTime": start,
        "endTime": end
      });
      start = nextStart;
      end = nextEnd;
    } else if (start < nextStart && (end >= nextStart || nextStart - end === 1)) {
      end = nextEnd;
    } else if (start > nextStart && nextStart > result[result.length - 1]["endTime"]) {
      start = nextStart;

      if (end < nextEnd) {
        end = nextEnd;
      }
    }
  }

  result.push({
    "startTime": start,
    "endTime": end
  });

  return result;
}




// TEST CASES
// console.log(mergeSort(testArr));
console.log(mergeRanges(testArr));