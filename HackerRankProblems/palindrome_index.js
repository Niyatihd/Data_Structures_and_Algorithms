const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, i * 2000); //for numbers to print at an increment of 2000 milisecs
}

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   }, 3000);
// }

// const printNumbersForEvery2Sec = n => {
// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 2000);
// }
// };
// printNumbersForEvery2Sec(10);
