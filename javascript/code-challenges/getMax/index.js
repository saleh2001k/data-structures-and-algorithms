class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const poppedData = this.head.data;
    this.head = this.head.next;
    return poppedData;
  }
}

function maxStack(linkedList) {
  let largest = null;
  let current = linkedList.pop();

  while (current !== null) {
    if (largest === null || current > largest) {
      largest = current;
    }
    current = linkedList.pop();
  }

  return largest;
}
