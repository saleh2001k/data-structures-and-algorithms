class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.prev = current.prev;
        newNode.next = current;
        if (current.prev) {
          current.prev.next = newNode;
        } else {
          this.head = newNode;
        }
        current.prev = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.prev = current;
        newNode.next = current.next;
        if (current.next) {
          current.next.prev = newNode;
        } else {
          this.tail = newNode;
        }
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.insertBefore(2, 5);

linkedList.insertAfter(3, 6);


let current = linkedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
