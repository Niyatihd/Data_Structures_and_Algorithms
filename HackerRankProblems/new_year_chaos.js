// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to n at the back.
// Any person in the queue can bribe the person directly in front of them to swap positions.If two people swap positions, they still wear the same sticker denoting their original places in line.One person can bribe at most two others.For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,6,7,8.
// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
// Function Description
// Complete the function minimumBribes in the editor below.It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
// minimumBribes has the following parameter(s):
// q: an array of integers
// Input Format
// The first line contains an integer t, the number of test cases.
// Each of the next t pairs of lines are as follows:
// - The first line contains an integer t, the number of people in the queue
//   - The second line has n space - separated integers describing the final state of the queue.

// *-------------*
//    Option#1
// *-------------*
function countBribedPlaces(q, idx) {
  let bribedCount = 0;

  for (let i = idx + 1; i < q.length; i++) {
    //Iterate from current index till end of the q to count values smaller than at i
    if (q[i] < q[idx]) {
      bribedCount++;
    }

    if (bribedCount > 2) {
      return bribedCount;
    }
  }

  return bribedCount;
}

function minimumBribes(q) {
  let minBribes = 0;
  let currBribe;

  for (let i = 0; i < q.length; i++) {
    currBribe = countBribedPlaces(q, i); //count values smaller than value at i

    if (currBribe > 2) {
      //if bribed more than twice, return "Too chaotic"
      return "Too chaotic";
    } else {
      minBribes += currBribe;
    }
  }

  return minBribes;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//    Option#2
// *-------------*
function minimumBribes2(q) {
  let n = q.length;

  let c = 0;
  for (let p = n; p-- > 0; ) {
    if (q[p] - (p + 1) > 2) {
      c = "Too chaotic";
      break;
    }
    console.log("---------------------");
    console.log("p: " + p);
    for (let j = Math.max(q[p]) - 2; j < p; j++) {
      console.log("j: " + j);
      console.log("q[j]: " + q[j]);
      console.log("q[p]: " + q[p]);
      if (q[j] > q[p]) c++;
      console.log("c: " + c);
    }
  }
  return c;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
const q = [2, 1, 5, 3, 4]; //=> 3
const q1 = [2, 5, 1, 3, 4]; //=>too chaotic
const q2 = "5 1 2 3 7 8 6 4".split(" "); //=> too chaotic
const q3 = [1, 2, 5, 3, 7, 8, 6, 4]; //=> 7

// console.log(countBribedPlaces(q, 1));
// console.log("q: " + minimumBribes(q));
// console.log("****************");
// console.log("q1: " + minimumBribes(q1));
// console.log("****************");
// console.log("q2: " + minimumBribes(q2));
// console.log("****************");
// console.log("q3: " + minimumBribes(q3));
// console.log("-------------------------");
// console.log("q3: " + minimumBribes(q3));
// console.log("q: " + minimumBribes2(q));
// console.log("****************");
// console.log("q1: " + minimumBribes2(q1));
// console.log("****************");
// console.log("q2: " + minimumBribes2(q2));
// console.log("****************");
console.log("q3: " + minimumBribes2(q3));
// console.log("q3: " + minimumBribes2(q3));
