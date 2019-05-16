function printStars() {
  let toPrint = "";

  for (let i = 1; i < 6; i++) {
    // for (let j = 1; j <= i; j++) {
    toPrint = toPrint.concat("*");
    console.log(toPrint);
    // }
  }
}

console.log(printStars());
