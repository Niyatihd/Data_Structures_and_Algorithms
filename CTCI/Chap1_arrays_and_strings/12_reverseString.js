// Reverse string
// ex1: str = "strong" => "gnorts"
// ex1: str = "later" => "retal"

// *----------------------*
// Reverse string option#1
// *----------------------*

function reversestr(str) {
  const mid = Math.floor(str.length / 2);
  const last = str.length - 1;
  let tempArr = str.split("");

  for (let i = 0; i < mid; i++) {
    let temp = tempArr[i];
    tempArr[i] = tempArr[last - i];
    tempArr[last - i] = temp;
  }

  return tempArr.join("");
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)



// *----------------------*
// Reverse string option#2
// *----------------------*

function reversestr2(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
// console.log(reversestr("strong"));
// console.log(reversestr("abcba"));
// console.log(reversestr2("stronge".split(''), 0, 6));
// console.log(reversestr2("abcba", 0, 4));

// module.exports = reversestr;
module.exports = reversestr2;