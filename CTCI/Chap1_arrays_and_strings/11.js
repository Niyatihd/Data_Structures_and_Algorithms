// Problem 1.1: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
// ex1: str = "gjfhdg" => false
// ex1: str = "abcdefg" => true

// *-----------------------------*
// WITH additional data structure
// *-----------------------------*
function uniqueChar(str) {
  let charsCount = {};

  for (let i = 0; i < str.length; i++) {
    if (charsCount[str[i]]) {
      charsCount[str[i]] += 1;
    } else {
      charsCount[str[i]] = 1;
    }
  }

  // console.log(charsCount);
  let counts = Object.values(charsCount);

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 1) {
      return false;
    }
  }

  return true;
}

// console.log(uniqueChar("sttr"));

// Analysis: 
// Time complexity = O(n)
// Space complexity = O(n)

// *--------------------------------*
// WITHOUT additional data structure
// *--------------------------------*

function uniqueChar(str) {

}

// console.log(uniqueChar("sttr"));

// Analysis: 
// Time complexity = O(n)
// Space complexity = O(n)