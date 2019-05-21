function longerString(s1, s2) {
  return s1.length >= s2.length ? s1 : s2;
}

function shorterString(s1, s2) {
  return s1.length >= s2.length ? s2 : s1;
}

function addStrings(string1, string2) {
  const sumResultArray = [];
  let carry = false;
  let el1, el2, currSum;
  const longerStr = longerString(string1, string2);
  // .split("")
  // .reverse()
  // .join("");
  const shorterStr = shorterString(string1, string2);
  // .split("")
  // .reverse()
  // .join("");
  console.log("longer: " + longerStr);
  console.log("shorter: " + shorterStr);

  for (let i = longerStr.length - 1; i >= 0; i--) {
    if (longerStr[i] === ".") {
      sumResultArray.push(".");
      continue;
    }
    el1 = parseInt(longerStr[i]);
    el2 = parseInt(shorterStr[i]);
    console.log("el1: " + el1);
    console.log("el2: " + el2);

    if (shorterStr[i] === undefined) {
      if (carry === true) {
        sumResultArray.push((el1 + 1).toString());
      } else {
        sumResultArray.push(el1.toString());
      }
    } else {
      currSum = carry === true ? el1 + el2 + 1 : el1 + el2;
      carry = false;

      if (currSum > 9) {
        carry = true;
        sumResultArray.push(currSum.toString()[1]);
      } else {
        sumResultArray.push(currSum.toString());
      }
    }
  }

  return sumResultArray.reverse().join("");
}

// console.log(longerString("rfgh", "l"));
// console.log(shorterString("rfgh", "l"));
console.log(addStrings((s1 = "287674675"), (s2 = "6565247538")));
console.log("result should be: ");

console.log(287674675 + 6565247538);
console.log(addStrings((s1 = "23.5"), (s2 = "6.0")));
console.log("result should be: ");

console.log(23.5 + 6.0);
