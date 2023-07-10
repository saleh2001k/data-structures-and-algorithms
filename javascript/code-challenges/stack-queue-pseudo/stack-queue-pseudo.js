class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
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
  
  class PseudoQueue {
    constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }
  
    enqueue(value) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack1.push(value);
      while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
      }
    }
  
    dequeue() {
      if (this.stack1.isEmpty()) {
        throw new Error("PseudoQueue is empty");
      }
      return this.stack1.pop();
    }
  }
  
  module.exports = { Stack, PseudoQueue };

  

  // Test Case 1eue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 15

// Test Case 2element
const queue2 = new PseudoQueue();
queue2.enqueue(5);
console.log(queue2.dequeue()); // Output: 5

// Test Case 3ternating operations
const queue3 = new PseudoQueue();
queue3.enqueue(10);
console.log(queue3.dequeue()); // Output: 10
queue3.enqueue(20);
queue3.enqueue(30);
console.log(queue3.dequeue()); // Output: 20
console.log(queue3.dequeue()); // Output: 30

// Test Case 4
const queue4 = new PseudoQueue();
try {
  console.log(queue4.dequeue()); // Error: PseudoQueue is empty
} catch (error) {
  console.log(error.message);
}