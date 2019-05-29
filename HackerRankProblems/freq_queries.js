// You are given q queries. Each query is of the form two integers described below:
// 1-x  : Insert x in your data structure.
// 2-y  : Delete one occurence of y from your data structure, if present.
// 3-z  : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.
// The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] contains the data element. For example, you are given array queries = [[1,1], [2,2], [3,2], [1,1], [1,1], [2,1], [3,2]]. The results of each operation are:
// Operation   Array   Output
// (1,1)       [1]
// (2,2)       [1]
// (3,2)                   0
// (1,1)       [1,1]
// (1,1)       [1,1,1]
// (2,1)       [1,1]
// (3,2)                   1
// Return an array with the output: [0,1].

function freqQueryTimeout(queries) {
  //[[1,1], [2,2], [3,2], [1,1], [1,1], [2,1], [3,2]]

  const query = {};
  let result = [];
  let operation, dataEle, currQuery, queryVals;

  queries.forEach(subArr => {
    operation = subArr[0];
    dataEle = subArr[1];
    // currQuery = query[dataEle];
    // console.log("op: " + operation);
    // console.log("dataEle: " + dataEle);
    // console.log("query: ");
    // console.log(query);

    switch (operation) {
      case 1:
        if (query[dataEle] === undefined) {
          query[dataEle] = 1;
        } else {
          query[dataEle]++;
        }
        break;
      case 2:
        if (query[dataEle] !== undefined) {
          query[dataEle]--;
        }
        break;
      case 3:
        queryVals = Object.values(query);
        if (queryVals.includes(dataEle)) {
          result.push(1);
        } else {
          result.push(0);
        }
        break;
      default:
        break;
    }
  });

  return result;
}

function freqQuery(queries) {
  const frequencies = [];
  const result = [];

  for (const query of queries) {
    const action = query[0];
    const value = query[1];

    if (action === 1) {
      if (typeof frequencies[value] === "undefined") {
        frequencies[value] = 1;
      } else {
        ++frequencies[value];
      }
    }

    if (action === 2) {
      if (frequencies[value]) {
        --frequencies[value];
      }
    }

    if (action === 3) {
      result.push(frequencies.includes(value) ? 1 : 0);
    }
  }

  return result;
}
// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(
  freqQuery([[1, 1], [2, 2], [3, 2], [1, 1], [1, 1], [2, 1], [3, 2]])
); //=> [0,1]
console.log("--------------------------");
console.log(
  freqQuery([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]])
); //=> [0,1]
console.log("--------------------------");
console.log(freqQuery([[3, 4], [2, 1003], [1, 16], [3, 1]])); //=> [0,1]
