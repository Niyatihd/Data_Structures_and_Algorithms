function printStars() {
  let toPrint = "";

  for (let i = 1; i < 6; i++) {
    toPrint = toPrint.concat("*");
    console.log(toPrint);
  }
}

console.log(printStars());
