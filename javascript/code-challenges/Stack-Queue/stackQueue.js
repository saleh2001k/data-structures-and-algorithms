class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  

  // ---------- Stack ----------
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(value) {
      const new_node = new Node(value);
      if (this.top === null) {
        this.top = new_node;
      } else {
        new_node.next = this.top;
        this.top = new_node;
      }
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      const value = this.top.value;
      this.top = this.top.next;
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.top.value;
    }
  
    isEmpty() {
      return this.top === null;
    }
  }
  
  // ---------- Queue ----------
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(value) {
      const new_node = new Node(value);
      if (this.front === null) {
        this.front = new_node;
        this.rear = new_node;
      } else {
        this.rear.next = new_node;
        this.rear = new_node;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      const value = this.front.value;
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.front.value;
    }
  
    isEmpty() {
      return this.front === null;
    }
  }
  
  
  module.exports = { Stack, Queue };
  