// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode" => return 0.
// s = "loveleetcode" => return 2.

function firstUniqChar(s) {
  if (s.length === 0) return -1;
  let count = {};
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] >= 0) {
      delete count[s[i]];
      seen.add(s[i]);
    } else if (!seen.has(s[i])) {
      count[s[i]] = i;
    }
  }

  if (Object.values(count).length === 0) return -1;
  let minIdx = Math.min.apply(null, Object.values(count));
  return minIdx;
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
console.log(firstUniqChar("aadadaad"));
