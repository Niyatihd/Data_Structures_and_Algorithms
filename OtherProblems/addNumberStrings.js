// Add two strings containing numbers.
// *Simply converting strings to numbers and adding them together isn’t acceptable.*
// Example: function addNumberStrings(s1, s2)
// s1 = "287674675", s2 = "6565247538" => 6852922213

class SumNumberStrings {
  constructor(s1, s2) {
    this.s1 = s1
      .split("")
      .reverse()
      .join("");
    this.s2 = s2
      .split("")
      .reverse()
      .join("");
    this.longer;
    this.shorter;
    this.sumResult;
  }

  longerString() {
    this.longer = this.s1.length >= this.s2.length ? this.s1 : this.s2;
  }

  shorterString() {
    this.shorter = this.s1.length >= this.s2.length ? this.s2 : this.s1;
  }

  getSum() {
    const sumResultArray = [];
    let carry = false;
    let el1, el2, currSum;

    for (let i = 0; i < this.longer.length; i++) {
      el1 = parseInt(this.longer[i]);
      el2 = parseInt(this.shorter[i]);

      if (this.shorter[i] === undefined) {
        if (carry === true) {
          sumResultArray.push((el1 + 1).toString());
        } else {
          sumResultArray.push(el1.toString());
        }
      } else {
        currSum = carry === true ? el1 + el2 + 1 : el1 + el2;
        carry = false;
        if (currSum > 9) {
          carry = true;
          sumResultArray.push(currSum.toString()[1]);
        } else {
          sumResultArray.push(currSum.toString());
        }
      }
    }
    return sumResultArray;
  }

  addStrings() {
    this.longerString();
    this.shorterString();
    this.sumResult = this.getSum()
      .reverse()
      .join("");
  }

  sumResult() {
    this.addStrings();
    return this.sumResult;
  }

  printStrings() {
    console.log(this.s1, this.s2);
  }
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*

let test = new SumNumberStrings((s1 = "287674675"), (s2 = "6565247538"));
// let test = new SumNumberStrings((s1 = "67512"), (s2 = "7538"));
// test.longerString();
// console.log(test.longer);
// console.log(test.printStrings());
// console.log("result should be: ");
// console.log(287674675 + 6565247538);
// console.log(test.addStrings());
console.log(test.sumResult());
