// Write a function that takes an integer flightLength( in minutes) and an array of integers movieLengths( in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

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