// Write a function that takes an integer flightLength( in minutes) and an array of integers movieLengths( in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// *-------------*
// Option#1
// *-------------*

function totalLengthOfMovies(movieLengths, flightLength) {
  for (let i = 0; i < movieLengths.length; i++) {
    for (let j = i + 1; j < movieLengths.length; j++) {

      if (movieLengths[i] + movieLengths[j] === flightLength) {
        return true;
      }
    }
  }

  return false;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n^2)
// Space complexity = O(1)

// *-------------*
// Option#2
// *-------------*
function totalLengthOfMovies2(movieLengths, flightLength) {
  let alreadySeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    let currMovieLen = movieLengths[i];
    let desiredDiff = flightLength - currMovieLen;

    if (alreadySeen.has(desiredDiff)) {
      return true;
    }

    alreadySeen.add(currMovieLen);
  }

  return false;
}

// *-------------*
//   TEST CASES
// *-------------*
console.log(totalLengthOfMovies([1, 2, 3, 4, 5], 8));
console.log(totalLengthOfMovies([1, 2, 3, 4, 5], 11));
console.log(totalLengthOfMovies2([1, 2, 3, 4, 5], 8));
console.log(totalLengthOfMovies2([1, 2, 3, 4, 5], 11));