// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same // backward as forward.
// Example 1:
// Input: 121
// Output: true
// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore /// it is not a palindrome.
// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
// Coud you solve it without converting the integer to a string?

function digitsArr(int) {
  let arr = int < 0 ? ["*"] : [];
  console.log(arr);
  let num = Math.abs(int);

  if (num < 10) {
    arr.push(num);
    return arr;
  }

  while (num) {
    if (num < 10) {
      arr.push(num);
      break;
    }

    let rem = num % 10;
    arr.push(rem);
    num = (num - rem) / 10;
  }

  return arr;
}

// console.log(digitsArr(121));
// console.log(digitsArr(-121));
// console.log(digitsArr(10));
console.log(digitsArr(-1));

function isPalindrome(int) {
  let digits = digitsArr(int);

  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - 1 - i]) {
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
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
console.log(isPalindrome(-1));
