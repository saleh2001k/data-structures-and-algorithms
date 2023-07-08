const { Stack, Queue } = require('./stackQueue'); 

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should push onto a stack', () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  it('should push multiple values onto a stack', () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);
    expect(stack.peek()).toBe(15);
  });

  it('should pop off the stack', () => {
    stack.push(5);
    stack.push(10);
    const value = stack.pop();
    expect(value).toBe(10);
    expect(stack.peek()).toBe(5);
  });

  it('should empty a stack after multiple pops', () => {
    stack.push(5);
    stack.push(10);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should peek the next item on the stack', () => {
    stack.push(5);
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('should instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should raise an exception when calling pop on an empty stack', () => {
    expect(() => stack.pop()).toThrow(Error);
  });

  it('should raise an exception when calling peek on an empty stack', () => {
    expect(() => stack.peek()).toThrow(Error);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should enqueue into a queue', () => {
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
  });

  it('should enqueue multiple values into a queue', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.peek()).toBe(5);
  });

  it('should dequeue out of a queue the expected value', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    const value = queue.dequeue();
    expect(value).toBe(5);
    expect(queue.peek()).toBe(10);
  });

  it('should empty a queue after multiple dequeues', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('should raise an exception when calling dequeue on an empty queue', () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });

  it('should raise an exception when calling peek on an empty queue', () => {
    expect(() => queue.peek()).toThrow(Error);
  });
});
