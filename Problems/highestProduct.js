// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.
//Ex: arr1 = [1,2,3,5,6] => 90

//[3,5,8,5,3,2,5,67,8]

//Approach
//set = [3,5,8] => 120
// min(set) <= next ? 
// if yes,  delete min, add next => 

function createHighestNumObj(arr) {
  let num1 = Math.max(arr[0], arr[1], arr[2]);
  let num3 = Math.min(arr[0], arr[1], arr[2]);
  let obj = {
    1: num1,
    3: num3
  };

  for (let i = 0; i < 3; i++) {
    if (arr[i] !== num1 && arr[i] !== num3) {
      obj[2] = arr[i];
    }
  }

  return obj;
}

// console.log(createHighestNumObj([1, 2, 3, 5, 6]));

function highestProdofThreeInts(arr) {


  let highestNums = createHighestNumObj(arr);
  // let highestNums = arr.slice(0, 3);
  // let highestNums = new Set([arr[0], arr[1], arr[2]]);
  console.log("highestNums: ");
  console.log(highestNums);

  for (let i = 3; i < arr.length; i++) {
    if (highestNums[3] < arr[i]) {
      highestNums[3] = arr[i];
    } else if (highestNums[2] < arr[i]) {
      highestNums[2] = arr[i];
    } else if (highestNums[1] < arr[i]) {
      highestNums[1] = arr[i];
    }

    highestNums = createHighestNumObj(Object.values(highestNums));
    console.log("highestNums: ");
    console.log(highestNums);
  }

  console.log("Final highestNums: ");
  console.log(highestNums);

  let result = highestNums[1] * highestNums[2] * highestNums[3];
  return result;
}

// *-------------*
//   TEST CASES
// *-------------*
const test = [1, 9, 3, 5, 6, 8];
console.log(highestProdofThreeInts(test));