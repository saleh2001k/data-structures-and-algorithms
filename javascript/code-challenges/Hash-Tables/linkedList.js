class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.count = 0;
  }

  add(data) {
    if (!this.firstNode) {
      this.firstNode = new Node(data);
      this.count++;
      return;
    }

    let current = this.firstNode;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
    this.count++;
    return this.firstNode;
  }

  find(key) {
    let current = this.firstNode;
    while (current) {
      if (current.data[key]) {
        return current.data[key];
      }
      current = current.next;
    }

    return null;
  }

  getKeys() {
    const keys = [];
    let currentNode = this.firstNode;

    while (currentNode) {
      keys.push(Object.keys(currentNode.data)[0]);
      currentNode = currentNode.next;
    }

    return keys;
  }
}

module.exports = LinkedList;
