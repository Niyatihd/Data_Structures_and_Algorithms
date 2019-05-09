filledInSpaces = [[1, 0], [0, 2], [2, 1], [2, 0]];
// filledInSpaces = [
//   [3, 1],
//   [4, 1],
//   [5, 1],
//   [6, 1],
//   [6, 2],
//   [8, 1],
//   [8, 2],
//   [8, 3],
//   [9, 3],
//   [1, 2],
//   [1, 3],
//   [4, 4],
//   [5, 4],
//   [6, 4],
//   [5, 5],
//   [6, 5],
//   [7, 5],
//   [6, 6],
//   [1, 5],
//   [2, 5],
//   [1, 6],
//   [2, 6],
//   [3, 8],
//   [4, 8],
//   [5, 8]
// ];
// size = 10; //grid size
// [4,4]  check [3,4], [5,4] [4,5] [4, 3]
// [x,y]  check [x-1,y], [x+1,y] [x,y+1] [x, y-1]

// plan2
// make 2 x 2 array
// [
//   [x, o, x, x, x, o],
//   [o, o, o, x, x, o],
//   [o, o, o, x, x, o],
//   [o, o, o, x, x, o]
// ];

function makeGrid(size, filledInSpaces) {
  let board = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < filledInSpaces.length; i++) {
    let currPos = filledInSpaces[i];
    let x = currPos[0];
    let y = currPos[1];

    board[x][y] = 1;
  }

  return board;
}

// console.log(makeGrid(10, filledInSpaces));

function checkNeighbours(pos, board, size) {
  let filledPos = [];
  let x = pos[0];
  let y = pos[1];
  if (x > 0 && board[x - 1][y] === 1) {
    filledPos.push([x - 1, y]);
  }
  if (x < size - 1 && board[x + 1][y] === 1) {
    filledPos.push([x + 1, y]);
  }
  if (y < size - 1 && board[x][y + 1] === 1) {
    filledPos.push([x, y + 1]);
  }
  if (y > 0 && board[x][y - 1] === 1) {
    filledPos.push([x, y - 1]);
  }

  return filledPos;
}

// console.log(checkNeighbours([6, 5], makeGrid(10, filledInSpaces)));

function largestConnectedComponent(size, filledInSpaces) {
  let board = makeGrid(size, filledInSpaces);
  maxCount = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        let count = countNeighbours([i, j], board, size);
        if (count > maxCount) {
          maxCount = count;
          console.log([i, j]);
          console.log(maxCount);
        }
      }
    }
  }

  return maxCount;
}

console.log(largestConnectedComponent(10, filledInSpaces));

function countNeighbours(pos, board, size) {
  // let board = makeGrid(10, filledInSpaces);
  // console.log(board);
  let n = checkNeighbours(pos, board, size); //[]
  // console.log("n");
  // console.log(n);
  let initialSeen = markSeen(n, pos);
  let seen = new Set();
  let posStr = pos[0].toString() + "-" + pos[1].toString();
  seen.add(posStr);
  // seen[pos[0]] = pos[1];
  // console.log("seen");
  // console.log(seen);
  // let i = 90;
  // while (i > 0) {
  while (n.length > 0) {
    // console.log("seen");
    // console.log(seen);
    // console.log("n");
    // console.log(n);
    let curr = n.pop();
    let currStr = curr[0].toString() + "-" + curr[1].toString();

    // console.log("curr: ");
    // console.log(curr);

    if (!seen.has(currStr)) {
      let otherN = checkNeighbours(curr, board);
      let notSeenN = checkSeen(initialSeen, seen, otherN);
      // console.log("otherN: ");
      // console.log(otherN);
      // console.log(n.concat(otherN));
      n = n.concat(notSeenN);
      seen.add(currStr);
    }
    // i--;
  }

  return seen.size;
}

// console.log(countNeighbours([8, 1]));

function checkSeen(initialSeen, seen, arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let neigh = arr[i];
    let neighStr = neigh[0].toString() + "-" + neigh[1].toString();

    if (!seen.has(neighStr) && !initialSeen.has(neighStr)) {
      result.push(neigh);
      // seen.add(neighStr);
    }
  }

  return result;
}

function markSeen(arr, pos) {
  let seenArr = new Set();
  let posStr = pos[0].toString() + "-" + pos[1].toString();
  seenArr.add(posStr);

  for (let i = 0; i < arr.length; i++) {
    let initial = arr[i];
    let iniStr = initial[0].toString() + "-" + initial[1].toString();
    // console.log(iniStr === "6-5");
    if (!seenArr.has(iniStr)) {
      seenArr.add(iniStr);
    }
  }

  return seenArr;
}

// let s = new Set();
// s.add("6-5");
// s.add("1-1");
// console.log(markSeen([[6, 5], [1, 1], [3, 4]], [6, 5]));
// console.log(checkSeen(s, [[6, 5], [1, 1], [3, 4]]));

//trial
//----------------------------------------------------
// function checkNeighbours(arr = [pos]) {
//   if (arr.length === 0) return 0;
//   let board = makeGrid(10, filledInSpaces);
//   let seen = {};
//   let pos = arr.pop();
//   seen[pos[0]] = pos[1];
//   let count = 1;

//   // let filledPos = [];
//   let x = pos[0]; //5
//   let y = pos[1]; //6
//   if (seen[x - 1] !== y && board[x - 1][y] === 1) {
//     arr.push([x - 1, y]);
//     count += 1;
//   }
//   if (seen[x + 1] !== y && board[x + 1][y] === 1) {
//     arr.push([x + 1, y]);
//     count += 1;
//   }
//   if (seen[x] !== y + 1 && board[x][y + 1] === 1) {
//     arr.push([x, y + 1]);
//     count += 1;
//   }
//   if (seen[x] !== y - 1 && board[x][y - 1] === 1) {
//     arr.push([x, y - 1]);
//     count += 1;
//   }

//   checkNeighbours(arr, board);

//   return count;
// }

// console.log(checkNeighbours([6, 5]));
