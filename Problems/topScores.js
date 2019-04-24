// Write a function that takes:
// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.
// For example:
// const unsortedScores = [37, 89, 41, 65, 91, 53];
// const HIGHEST_POSSIBLE_SCORE = 100;
// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE); => [91, 89, 65, 53, 41, 37]

function topScores(unsortedScores, highestPossibleScore) {
  const scores = new Array(highestPossibleScore + 1).fill(0); //starts with 0, so length is 1 more than highestPossibleScore

  for (let i = 0; i < unsortedScores.length; i++) {
    scores[unsortedScores[i]] += 1;
  }




}