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
//   TEST CASES
// *-------------*
const q = [2, 1, 5, 3, 4];
const q1 = [2, 5, 1, 3, 4];
// const q = [5, 1, 2, 3, 7, 8, 6, 4];
// const q = [1, 2, 5, 3, 7, 8, 6, 4];
// console.log(countBribedPlaces(q, 1));
console.log(minimumBribes(q));
console.log(minimumBribes(q1));
