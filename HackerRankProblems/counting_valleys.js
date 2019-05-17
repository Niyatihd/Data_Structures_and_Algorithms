// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
// For example, if Gary's path is s = "DDUUUUDD", he first enters a valley 2 units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.
// Function Description
// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
// countingValleys has the following parameter(s):
// n: the number of steps Gary takes
// s: a string describing his path

// *-------------*
// Option#1
// *-------------*
function countingValleys(str, count) {
  let prevLevel = 0;
  let feature;
  let level = 0;
  const featureCount = { mountain: 0, valley: 0 };

  str.split("").forEach(ele => {
    prevLevel = level;
    level = ele === "U" ? level + 1 : level - 1;

    if (level === 0) featureCount[feature] += 1;
    if (prevLevel === 0 && level > 0) {
      feature = "mountain";
    } else if (prevLevel === 0 && level < 0) {
      feature = "valley";
    }
  });

  return featureCount.valley;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
// Option#2
// *-------------*
function countingValleys2(str, count) {
  let level = 0;
  let valleys = 0;

  str.split("").forEach(ele => {
    prevLevel = level;
    level = ele === "U" ? level + 1 : level - 1;

    if (level === 0 && ele === "U") valleys += 1;
  });

  return valleys;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(
  "The number of valleys visited: " + countingValleys("UDDDUDUUDDUUUUDD", 16)
);
console.log(
  "The number of valleys visited: " + countingValleys2("UDDDUDUUDDUUUUDD", 16)
);
