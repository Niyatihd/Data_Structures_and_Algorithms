// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode" => return 0.
// s = "loveleetcode" => return 2.

function firstUniqChar(s) {
  if (s.length === 0) return -1;
  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      delete count[s[i]];
    } else {
      count[s[i]] = i;
    }
  }

  return Math.min.apply(null, Object.values(count));
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar(""));
console.log(firstUniqChar("cc"));
