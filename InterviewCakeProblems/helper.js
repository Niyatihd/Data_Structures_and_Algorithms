// function decodeAlphabet(str) { //str = "2B 3C"
//   let shipCoords = str.split(" ");

//   let shipPos = [];
//   let posnumber1 = shipCoords[0][0];
//   let posnumber2 = shipCoords[1][0];
//   let posletter1 = shipCoords[0][1];
//   let posletter2 = shipCoords[1][1];

//   for (let i = posnumber1; i <= posnumber2; i++) {
//     let tempPos1 = i + posletter1;
//     let tempPos2 = i + posletter2;

//     if shipPos.includes(tempPos1)
//   }
// }

function decodeAlphabet(str) { //"2B 3C"
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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



const decodeObj = {
  "A": 1,
  "B": 2,
  "C": 3,
  "D": 4,
  "E": 5,
  "F": 6,
  "G": 7,
  "H": 8,
  "I": 9,
  "J": 10,
  "K": 11,
  "L": 12,
  "M": 13,
  "N": 14,
  "O": 15,
  "P": 16,
  "Q": 17,
  "R": 18,
  "S": 19,
  "T": 20,
  "U": 21,
  "V": 22,
  "W": 23,
  "X": 24,
  "Y": 25,
  "Z": 26
};

const N = 4;
const S = "2B 3C,3D 4D";
const T = "1D 2A 3C 3D 4A 4D";
// let matrix = new Array(N).fill(0);
// console.log(matrix);

// let myGrid = [...Array(N)].map(e => Array(N).fill(0));
// console.log(myGrid);

let ships = S.split(",");
// console.log(ships);

let shipsPos = [];
for (let i = 0; i < ships.length; i++) {
  // console.log(decodeAlphabet(ships[i]));
  shipsPos.push(decodeAlphabet(ships[i]));
}

// console.log(shipsPos);

let targetPos = decodeAlphabet(T).split(" ");
// let targetPos = ["34", "44"];
// console.log(targetPos);
console.log("------------------");



// //mark ships on board
// for (let i = 0; i < shipsPos.length; i++) {
//   let currShipPos = shipsPos[i].split(" "); //'22 33'
//   console.log(currShipPos);
//   let startCell = currShipPos[0];
//   let endCell = currShipPos[1];

//   for (let j = startCell[0]; j <= endCell[0]; j++) {
//     for (let k = startCell[1]; k <= endCell[1]; k++) {
//       myGrid[j - 1][k - 1] = "S" + i;
//     }
//   }

// }
// console.log(myGrid);
let hit = '0';
let sunk = '0';

//mark ships on board
for (let i = 0; i < shipsPos.length; i++) {
  let currShipPos = shipsPos[i].split(" "); //'22 33'
  // console.log(currShipPos);
  let startCell = currShipPos[0];
  let endCell = currShipPos[1];
  let shipLen = 0;
  let count = 0;
  // let hit = '0';
  // let sunk = '0';

  for (let j = startCell[0]; j <= endCell[0]; j++) {
    for (let k = startCell[1]; k <= endCell[1]; k++) {
      shipLen++;
      let num = j.toString() + k.toString();

      if (targetPos.includes(num)) {
        count++;
      }
    }


  }

  if (count === shipLen) {
    sunk = '1';
  } else if (count > 0) {
    hit = '1';
  }
  // console.log("shipLen: " + shipLen);
  // console.log("count: " + count);
}
console.log(hit + " " + sunk);
// console.log(myGrid);