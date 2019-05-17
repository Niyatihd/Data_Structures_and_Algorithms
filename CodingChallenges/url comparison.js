const hexCode = {
  "!": "21",
  "#": "23",
  "%": "25",
  "(": "28",
  ")": "29",
  "*": "2a",
  ".": "2e",
  ";": "3b",
  "[": "5b",
  "\\": "5c",
  "]": "5d",
  "^": "5e",
  _: "5f",
  "{": "7b",
  "}": "7d",
  "|": "7c",
  "~": "7e"
};

const alphabets = "abcdefghijklmnopqrstuvwxyz";
const reservedPunc = ",/?:@&=+$#";

const test =
  "http://abc.com:80/~smith/home.html;http://ABC.com/%7Esmith/home.html";

const compareUrl = function(test) {
  let testArr = test.split(";"); //  ["http://abc.com:80/~smith/home.html", "http://ABC.com/%7Esmith/home.html"];

  for (let i = 0; i < testArr[0].length; i++) {
    let char1 = testArr[0][i];
    let char2 = testArr[1][i];

    if (alphabets.includes(char1)) {
      if (char1.toLowerCase() !== char2.toLowerCase()) {
        return false;
      }
    } else if (reservedPunc.includes(char1)) {
      if (char1 === char2) {
        return false;
      } else if (hexCode[char1] || hexCode[char2]) {
        if (
          hexCode[char1] !== testArr[1].slice(i + 1, i + 3) ||
          hexCode[char2] !== testArr[0].slice(i + 1, i + 3)
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(compareUrl(test));
