// Given two strings, determine if they share a common substring. A substring may be as small as one character.
// For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.
// Function Description
// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.
// twoStrings has the following parameter(s):
// s1, s2: two strings to analyze .

function twoStrings(s1, s2) {
  let shorterStr;
  let longerStr;
  let char;

  if (s1.length >= s2.length) {
    shorterStr = s2;
    longerStr = s1;
  }
  const shorterStrSet = new Set(shorterStr.split(""));

  for (let i = 0; i < longerStr.length; i++) {
    char = longerStr[i];

    if (shorterStrSet.has(char)) {
      return "YES";
    }
  }

  return "NO";
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(twoStrings("a", "abc"));
