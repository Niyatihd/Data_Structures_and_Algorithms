// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
// For example, if the string s = 'abcac' and  n= 10, the substring we consider is 'abcacabcac', the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.
// Function Description
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider
// Input Format
// The first line contains a single string,s .
// The second line contains an integer, n.

function countA(str, maxLen) {
  let count = 0;

  for (let i = 0; i < maxLen; i++) {
    if (str[i] === "a") count++;
  }

  return count;
}

function repeatedString(s, n) {
  let countOfA = countA(s, s.length);
  if (countOfA === 0) return 0;

  if (s.length === 1) return n;

  const multiple = Math.floor(n / s.length);
  const rem = n % s.length;
  let remCount = countA(s, rem);

  return countOfA * multiple + remCount;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
// console.log(countA("abhuahagaba")); // => 5
console.log(repeatedString("abhuahagaba", 23)); //11
console.log(repeatedString("a", 23)); //23
console.log(repeatedString("aab", 882787)); //588525
console.log(repeatedString("x", 970770)); //0
