// Write an efficient function that given 2 strings checks whether one is permutation of other.
// Examples:
// "civic", "iivcc" should return true
// "civil", "cilve" should return false
// "civil", "livci" should return false

// *-------------*
// Option#1
// *-------------*

function checkPermutation(str1, str2) {
  let count = {};

  if (str1.length !== str1.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (count[str1[i]]) {
      count[str1[i]] += 1;
    } else {
      count[str1[i]] = 1;
    }

    if (count[str2[i]]) {
      count[str2[i]] -= 1;
    } else {
      count[str2[i]] = -1;
    }

    console.log("count:");
    console.log(Object.values(count));
  }

  let countVals = Object.values(count);

  for (let i = 0; i < countVals.length; i++) {
    if (countVals[i] !== 0) {
      return false;
    }
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
console.log(checkPermutation("civic", "iivcc"));
console.log(checkPermutation("civil", "cilve"));
console.log(checkPermutation("civil", "livci"));
