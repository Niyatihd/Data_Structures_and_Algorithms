// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    let temp;
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;

    return this.length;
  }
  pop() {
    if (this.top === null) return null;

    const removed = this.top;

    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return removed.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
