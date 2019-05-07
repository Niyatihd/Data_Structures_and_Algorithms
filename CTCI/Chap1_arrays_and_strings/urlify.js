// Write a method to replace all the spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters nd that you are given the true length of the string
// Ex: urlify("Mr John Smith    ", 13) => "Mr%20John%20Smith"


// DOES NOT REPLACE THE CHARS IN THE STR
// function urlify(str) {
//   let strArr = str.split(" ");
//   let result = [];

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== "") {
//       result.push(strArr[i]);
//     }
//   }

//   return result.join("%20");
// }


function urlify(str, strLen) {

  for (let i = 0; i < strLen; i++) {
    if (strArr[i] !== " ") {
      strArr[i] ;
    }
  }

  return result.join("%20");
}

console.log(urlify("Mr John Smith    "));
