// Reverse string
// ex1: str = "strong" => "gnorts"
// ex1: str = "later" => "retal"

// *-------------*
// Reverse string
// *-------------*

function reversestr(str) {
  const mid = Math.floor(str.length / 2);
  const last = str.length - 1;
  let tempArr = str.split("");

  for (let i = 0; i < mid; i++) {
    let temp = tempArr[i];
    tempArr[i] = tempArr[last - i];
    tempArr[last - i] = temp;
  }

  return tempArr.join("");
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(reversestr("strong"));
console.log(reversestr("abcba"));