// Write a function that takes an unsigned integer and return the number of '1' bits it has(also known as the Hamming weight).
// Example 1:
// Input: 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:
// Input: 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
// Example 3:
// Input: 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

function hammingWeight(n) {
  // console.log(num.toString(2).replace(/0/g, ""));
  return n.toString(2).replace(/0/g, "").length;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(hammingWeight(00000000000000000000000000001011)); //=>3
console.log(hammingWeight(0000000000000000000000001000000011)); //=>1
console.log(hammingWeight(11111111111111111111111111111101)); //=>31
