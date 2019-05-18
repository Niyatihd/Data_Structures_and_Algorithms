// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are n = 7 socks with colors arr = [1,2,1,2,1,3,2]. There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock

function pairOfSocks(n, arr) {
  const count = {};
  let pairs = 0;

  arr.forEach(element => {
    if (count[element] === undefined) {
      count[element] -= 1;
      pairs += 1;
    } else {
      count[element] = 1;
    }
  });

  return pairs;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(pairOfSocks(7, [1, 2, 1, 2, 1, 3, 2])); // => 2
console.log(pairOfSocks(9, [10, 20, 20, 10, 10, 30, 50, 50, 10, 20, 20])); // => 5
