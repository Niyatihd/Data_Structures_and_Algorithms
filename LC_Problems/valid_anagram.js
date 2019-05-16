// Given two strings s and t , write a function to determine if t is an anagram of s.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]] += 1;
    } else {
      count[s[i]] = 1;
    }

    if (count[t[i]]) {
      count[t[i]] -= 1;
    } else {
      count[t[i]] = -1;
    }
  }

  let vals = Object.values(count);

  for (let j = 0; j < vals.length; j++) {
    if (vals[j] !== 0) return false;
  }

  return true;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(validAnagram((s = "anagram"), (t = "nagaram")));
console.log(validAnagram((s = "rat"), (t = "car")));
