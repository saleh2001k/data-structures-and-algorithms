const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error("k must be a non-negative integer.");
    }

    if (!this.head) {
      throw new Error("The linked list is empty.");
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast.next) {
        throw new Error("k is greater than the length of the linked list.");
      }
      fast = fast.next;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

module.exports = LinkedList;
