// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode" => return 0.
// s = "loveleetcode" => return 2.

function firstUniqChar(str) {
  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      delete count[s[i]];
    } else {
      count[s[i]] = i;
    }
  }

  for (let j = 0; j < Object.keys(count).length; j++) {
    if (count[Object.keys(count)[j]] === 1) {
      return Object.keys(count)[j];
    }
  }
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log();
