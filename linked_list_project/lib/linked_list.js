// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  // TODO: Implement the removeTail method here
  //check conditions:
  // 1. no head,
  // 2. only head and tail , length === 0
  // 3. head, tail and nodes between them
  removeTail() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // TODO: Implement the addToHead method here
  // no head => this.head, this.tail = newNode, l++
  // only head and tail => newNode.next = this.head, this.head = newNode
  // nodes between H and T =>
  addToHead(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  // TODO: Implement the removeHead method here
  // 1. no head => undefined
  // 2. only H & T => head, tail = null
  // 3. nodes bet H & T => this.head = this.head.next
  removeHead() {
    if (!this.head) return undefined;
    const current = this.head;

    if (this.head.next !== null) {
      this.head = this.head.next;
    }
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;

    while (current) {
      if (current.value === target) return true;
      current = current.next;
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {}

  // TODO: Implement the set method here
  set(index, val) {}

  // TODO: Implement the insert method here
  insert(index, val) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {}
}

const x = new LinkedList();
// x.head = new Node("A");
x.addToTail("A");
x.addToTail("B");
x.addToTail("C");
x.addToTail("D");

console.log("x: ");
console.log(x);
console.log("x.head.next: ");
console.log(x.head.next);
console.log("x.length: " + x.length);

exports.Node = Node;
exports.LinkedList = LinkedList;
