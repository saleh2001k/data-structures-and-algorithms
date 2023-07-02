class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  kthFromEnd(k) {
    if (k < 0 || k >= this.length) {
      throw new Error("Invalid value of k.");
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
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
