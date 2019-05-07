// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverseInt(num) {
  //123
  let n = Math.abs(num);
  let digits = [];
  if (n < 10) return n;

  while (n) {
    if (n <= 9) {
      digits.push(n);
      break;
    }

    let rem = n % 10; //123 % 10 = 3
    digits.push(rem);
    n = (n - rem) / 10; //123 - 3 = 120/10 = 12
  }

  let result = parseInt(digits.join(""));
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;

  return num < 0 ? result * -1 : result;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
const num0 = 123;
const num3 = -123;
const num4 = 120;
const num5 = 0;
const num1 = 900000;
const num2 = 1534236469;
console.log(reverseInt(num0));
console.log(reverseInt(num3));
console.log(reverseInt(num4));
console.log(reverseInt(num5));
console.log(reverseInt(num1));
console.log(reverseInt(num2));
