// Write an efficient function that checks whether any permutation↴ of an input string is a palindrome.
// Examples:
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function isAnyPermutationPalindrome(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  // console.log(Object.values(count));

  let odds = 0;
  let countvals = Object.values(count);

  for (let j = 0; j < countvals.length; j++) {
    if (countvals[j] % 2 !== 0) {
      // console.log("obj val:" + countvals[j]);
      odds++;
    }
  }
  // console.log(odds);

  return odds === 0 || odds === 1 ? true : false;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(isAnyPermutationPalindrome("civic"));
console.log(isAnyPermutationPalindrome("cici"));
console.log(isAnyPermutationPalindrome("civil"));
console.log(isAnyPermutationPalindrome("vciil"));