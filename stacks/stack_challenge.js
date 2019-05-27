// CTCI 3.2  Stack Min
// Design a stack which, in addition to `push` and `pop`, has a function `min` which returns the minimum element. `push`, `pop` and `min` should all operate in `O(1)` time

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  //s =[1,2,3] ,3 = top, 1 = bot, top.next = 2
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.minStack = [];
  }

  min() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }

  push(val) {
    const newNode = new Node(val);
    const minVal = this.min();
    if (this.minStack.length === 0 || minVal > newNode.value) {
      this.minStack.push(newNode.value);
    }

    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (this.top === null) return null;
    const popped = this.top;
    this.top = this.top.next;
    this.length--;

    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    }

    if (popped.value === this.min()) {
      this.minStack.pop();
    }

    return popped;
  }

  size() {
    return this.length;
  }
}

// *-------------*
// Analysis:
// *-------------*
// all operations on stack,
// Time complexity = O(1)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
const s = new Stack(); //[4, 2, 10]
s.push(4);
console.log(s);
console.log("min: " + s.min());
console.log("-----------------");
s.push(2);
console.log(s);
console.log("min: " + s.min());

console.log("-----------------");
console.log("what happens on push: ");
console.log(s.push(10));
console.log(s);
console.log("min: " + s.min());

console.log("-----------------");
console.log("what happens on pop: ");
console.log(s.pop());
console.log(s);
console.log("min: " + s.min());

console.log("-----------------");
s.pop();
console.log(s);
console.log("min: " + s.min());

console.log("-----------------");
s.pop();
console.log(s);
console.log("min: " + s.min());

// const s = new Stack();
// s.push("A");
// console.log(s);
// console.log("-----------------");
// s.push("B");
// console.log(s);
// console.log("-----------------");
// console.log("what happens on push: ");
// console.log(s.push("C"));
// console.log(s);
// console.log("-----------------");
// console.log("what happens on pop: ");
// console.log(s.pop());
// console.log(s);
// console.log("-----------------");
// s.pop();
// console.log(s);
// console.log("-----------------");
// s.pop();
// console.log(s);
