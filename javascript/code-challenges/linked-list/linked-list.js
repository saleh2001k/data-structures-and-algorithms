const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(String(current.value));
      current = current.next;
    }
    values.push("NULL");
    return values.join(" -> ");
  }
}

// Testing
const myLinkedList = new LinkedList();
myLinkedList.insert("c");
myLinkedList.insert("b");
myLinkedList.insert("a");
console.log(myLinkedList.toString()); // Output: "a -> b -> c -> NULL"
console.log(myLinkedList.includes("b")); // Output: true
console.log(myLinkedList.includes("d")); // Output: false
