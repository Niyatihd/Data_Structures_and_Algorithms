// Problem 1.1: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
// ex1: str = "gjfhdg" => false
// ex1: str = "abcdefg" => true

// *-----------------------------*
// WITH additional data structure
// *-----------------------------*
function uniqueChar1(str) {
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

// Analysis: 
// Time complexity = O(n)
// Space complexity = O(n)

// *--------------------------------*
// WITHOUT additional data structure
// *--------------------------------*

function uniqueChar2(str) {
  for (let i = 0; i < str.length; i++) {
    let char1 = str[i];

    for (let j = i + 1; j < str.length; j++) {
      let char2 = str[j];

      if (char1 === char2) {
        return false;
      }
    }
  }

  return true;
}


// Analysis: 
// Time complexity = O(n)
// Space complexity = O(n)


// TEST CASES
console.log(uniqueChar1("str"));
console.log(uniqueChar1("sttr"));
console.log(uniqueChar2("str"));
console.log(uniqueChar2("sttr"));