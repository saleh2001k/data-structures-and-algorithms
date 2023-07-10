const { Stack, PseudoQueue } = require('./stack-queue-pseudo');

describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  test('enqueue and dequeue multiple elements', () => {
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(15);
  });

  test('enqueue and dequeue single element', () => {
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(5);
  });

  test('enqueue and dequeue with alternating operations', () => {
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('dequeue from an empty queue', () => {
    expect(() => queue.dequeue()).toThrowError('PseudoQueue is empty');
  });
});
