// Reverse string
// ex1: str = "strong" => "gnorts"
// ex1: str = "later" => "retal"

// *----------------------*
// Reverse string option#1
// *----------------------*

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



// *----------------------*
// Reverse string option#2
// *----------------------*

function reversestr2(str, start, end) {
  let arr = str.split("");
  let j = 0;

  for (let i = start; i < end; i++) {
    let temp = arr[i];
    arr[i] = arr[end - j];
    arr[end - j] = temp;
    j++;
  }

  return arr.join("");
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
console.log(reversestr2("strong", 0, 5));
console.log(reversestr2("abcba", 0, 4));

module.exports = reversestr;