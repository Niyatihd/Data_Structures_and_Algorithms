const decodeObj = {
  "A": "1",
  "B": "2",
  "C": "3",
  "D": "4",
  "E": "5",
  "F": "6",
  "G": "7",
  "H": "8",
  "I": "9",
  "J": "10",
  "K": "11",
  "L": "12",
  "M": "13",
  "N": "14",
  "O": "15",
  "P": "16",
  "Q": "17",
  "R": "18",
  "S": "19",
  "T": "20",
  "U": "21",
  "V": "22",
  "W": "23",
  "X": "24",
  "Y": "25",
  "Z": "26"
};

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function decodeAlphabet(str) { //"2B 3C"
  let tempArr = str.split(" ");

  let decoded = [];

  for (let j = 0; j < tempArr.length; j++) {
    let tempPos = tempArr[j];
    let templetter = "";
    let tempNum = "";

    for (let i = 0; i < tempPos.length; i++) {
      // console.log(tempPos[i]);
      let char = tempPos[i];

      if (alphabets.includes(char)) {
        templetter += decodeObj[char];
        // tempPosArr.push(decodeObj[char]);
      } else {
        tempNum += char;
        // tempPosArr.push(char);
      }
    }

    decoded.push([tempNum, templetter]);
  }

  return decoded;
}

console.log(decodeAlphabet("2B 2D 3D 4D 4A"));

function decodeAlphabetForTarget(str) { //"2B 3C"
  // const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (alphabets.includes(char)) {
      decoded += decodeObj[char];
    } else {
      decoded += char;
    }
  }

  return decoded;
}

// 3, '1A 1B,2C 2C', '1B'
// 4, '1B 2C,2D 4D', '2B 2D 3D 4D 4A

const N = 4;
const S = '1B 2C,2D 4D'; //[ [ [ '1', '1' ], [ '2', '1' ] ], [ [ '12', '1' ], [ '12', '1' ] ] ]
const T = "2B 2D 3D 4D 4A";

// const N = 12;
// const S = '1A 2A,12A 12A'; //[ [ [ '1', '1' ], [ '2', '1' ] ], [ [ '12', '1' ], [ '12', '1' ] ] ]
// const T = "12A";

function solution(N, S, T) {
  let ships = S.split(",");
  let shipsPos = [];

  for (let i = 0; i < ships.length; i++) {
    shipsPos.push(decodeAlphabet(ships[i]));
  }

  let targetPos = decodeAlphabet(T);
  console.log("targetPos: " + targetPos);
  let hit = 0;
  let sunk = 0;

  for (let i = 0; i < shipsPos.length; i++) {
    let currShipPos = shipsPos[i]; //[ [ '1', '1' ], [ '2', '1' ] ]
    let startCell = currShipPos[0];
    let endCell = currShipPos[1];
    let shipLen = 0;
    let count = 0;

    for (let j = parseInt(startCell[0]); j <= parseInt(endCell[0]); j++) {
      for (let k = parseInt(startCell[1]); k <= parseInt(endCell[1]); k++) {
        shipLen++;
        // let num = j.toString() + k.toString();
        let num = [j.toString(), k.toString()];
        console.log("num: " + num);
        if (targetPos.includes(num)) {
          count++;
        }
      }
    }

    if (count === shipLen) {
      hit += 1;
    } else if (count > 0) {
      sunk += 1;
    }
  }

  return hit.toString() + " " + sunk.toString();
}


console.log(solution(N, S, T));