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

// *-------------*
// option#1
// *-------------*
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

function mergeRanges(objArr) {
  // Create a deep copy of the meetings array
  const arr = JSON.parse(JSON.stringify(objArr));

  // Sort by start time
  const sortedRanges = arr.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // OR
  // const sortedRanges = mergeSort(arr); //returns new array, therefore no need to make deep copy

  let result = [];

  let start = arr[0]["startTime"];
  let end = arr[0]["endTime"];

  for (let i = 1; i < sortedRanges.length; i++) {
    let nextStart = sortedRanges[i]["startTime"];
    let nextEnd = sortedRanges[i]["endTime"];
    // console.log("start: " + start);
    // console.log("end: " + end);
    // console.log("nextStart: " + nextStart);
    // console.log("nextEnd: " + nextEnd);

    if (start < nextStart && end < nextStart && end < nextEnd) {
      // console.log("1");
      result.push({
        startTime: start,
        endTime: end
      });
      start = nextStart;
      end = nextEnd;
    } else if (
      start < nextStart &&
      (end >= nextStart || nextStart - end === 1) &&
      end < nextEnd
    ) {
      // console.log("2");
      end = nextEnd;
    } else if (
      start > nextStart &&
      nextStart > result[result.length - 1]["endTime"]
    ) {
      // console.log("3");
      start = nextStart;

      if (end < nextEnd) {
        end = nextEnd;
      }
    }
  }

  result.push({
    startTime: start,
    endTime: end
  });

  return result;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(nlog(n)) + O(n) = O(nlgn);
// If array is pre-sorted, O(n)
// Space complexity = O(n)

// *-------------*
// option#2
// *-------------*
// Notes: .sort() mutates original Array, therefore make copy/deepcopy and then sort
// for shallow copy, use slice(), for deepcopy use JSON.parse(JSON.stringify(arr))
function mergeRanges2(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  const sortedArr = arrCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  const merged = [sortedArr[0]];
  let lastMergedMeeting, currMeeting;

  for (let i = 1; i < sortedArr.length; i++) {
    lastMergedMeeting = merged[merged.length - 1];
    currMeeting = sortedArr[i];

    if (lastMergedMeeting.endTime >= currMeeting.startTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currMeeting.endTime
      );
    } else {
      merged.push(currMeeting);
    }
  }

  return merged;
}

// *-------------*
//   TEST CASES
// *-------------*
const testArr = [
  {
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
  }
];

const testArr2 = [
  {
    startTime: 1,
    endTime: 10
  },
  {
    startTime: 2,
    endTime: 6
  },
  {
    startTime: 3,
    endTime: 5
  },
  {
    startTime: 7,
    endTime: 9
  }
];

const testArr3 = [
  {
    startTime: 1,
    endTime: 3
  },
  {
    startTime: 2,
    endTime: 4
  }
];

const testArr4 = [
  {
    startTime: 1,
    endTime: 2
  },
  {
    startTime: 2,
    endTime: 3
  }
];

const testArr5 = [
  {
    startTime: 1,
    endTime: 5
  },
  {
    startTime: 2,
    endTime: 3
  }
];

// console.log(mergeSort(testArr));
console.log(mergeRanges(testArr));
console.log(mergeRanges(testArr2));
console.log(mergeRanges(testArr3));
console.log(mergeRanges(testArr4));
console.log(mergeRanges(testArr5));
console.log("--------------------");
console.log(mergeRanges(testArr));
console.log(mergeRanges(testArr2));
console.log(mergeRanges(testArr3));
console.log(mergeRanges(testArr4));
console.log(mergeRanges(testArr5));
