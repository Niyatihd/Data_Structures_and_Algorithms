// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

function reverseList(head) {
  let nextHead = null;
  let temp;

  while (head) {
    temp = head;
    head = head.next;
    temp.next = nextHead;
    nextHead = temp;
  }

  return nextHead;
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)
