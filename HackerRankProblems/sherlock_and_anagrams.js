// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
// For example s = 'mom', the list of all anagrammatic pairs is ["m", "m"], ["mo", "om"] at positions  [[0], [2]], [[0,1], [1,2]] respectively.
// Function Description
// Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in s.
// sherlockAndAnagrams has the following parameter(s):
// s: a string .
// Input Format
// The first line contains an integerq , the number of queries.
// Each of the next q lines contains a string s to analyze.

//Steps
// 0. check if s has any duplicate characters
// 1. getSubstrings
// 2. countAnagrams
// 3. check if isAnagram
// 4. combine all of above to use in sherlockAndAnagrams

function checkduplicatesInStr(s) {
  const duplicates = s.split("").filter((el, i) => s.indexOf(el) !== i).length;
  return duplicates > 0 ? true : false;
}

function getSubstrings(s) {
  const result = [];
  const strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length + 1; j++) {
      result.push(strArr.slice(i, j).join(""));
    }
  }

  return result;
}

function isAnagram(s1, s2) {
  const charMap = {};
  // console.log("s1: ");
  // console.log(s1);

  s1.split("").forEach(char => {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  });

  for (let i = 0; i < s2.length; i++) {
    if (charMap[s2[i]] === undefined) {
      return false;
    }
  }

  return true;
}

function countAnagrams(i, substrings) {
  // console.log(substrings[i]);
  let count = 0;
  const currSubstr = substrings[i];
  const substringsSlice = substrings.slice(i + 1);
  // console.log(substrings);

  substringsSlice.forEach((str, idx) => {
    if (str.length === currSubstr.length && isAnagram(str, currSubstr)) {
      count++;
    }
  });

  return count;
}

function sherlockAndAnagrams(s) {
  if (checkduplicatesInStr === false) return 0;

  const substrings = getSubstrings(s);
  let currAnagramCount;
  let finalAnagramCount = 0;

  for (let i = 0; i < substrings.length; i++) {
    currAnagramCount = countAnagrams(i, substrings);
    finalAnagramCount += currAnagramCount;
  }

  return finalAnagramCount;
}

// *-------------*
// Analysis:
// *-------------*
// all operations on stack,
// Time complexity = O(1)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
// console.log(getSubstrings("abcdea"));
// console.log(isAnagram("abe", "bca"));
// console.log(countAnagrams(0, ["bea", "bca", "abe", "eba"]));
console.log(sherlockAndAnagrams("kkkk")); //=> 10
